const { chromium } = require('playwright-core');
const fs = require('fs');
const path = require('path');

async function createDemo() {
  console.log('Starting demo creation...');
  
  // Launch browser
  const browser = await chromium.launch({
    headless: false, // Show browser for better recording
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const context = await browser.newContext({
    viewport: { width: 800, height: 600 }
  });
  
  const page = await context.newPage();
  
  // Create screenshots directory
  const screenshotsDir = './screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir);
  }
  
  let frameCount = 0;
  
  const takeScreenshot = async (name) => {
    frameCount++;
    await page.screenshot({ 
      path: `${screenshotsDir}/frame-${frameCount.toString().padStart(3, '0')}-${name}.png`,
      clip: { x: 0, y: 0, width: 600, height: 400 }
    });
    console.log(`Screenshot taken: frame-${frameCount.toString().padStart(3, '0')}-${name}.png`);
  };
  
  try {
    // Navigate to the app
    console.log('Navigating to app...');
    await page.goto('http://localhost:5173');
    
    // Wait for the app to load
    await page.waitForSelector('input[type="checkbox"]');
    await page.waitForTimeout(1000);

    console.log('Starting interactions...');
    
    // Initial state
    await takeScreenshot('initial');
    await page.waitForTimeout(500);

    // 1. Click on Fruits checkbox to select all fruits
    console.log('Clicking Fruits...');
    const fruitsCheckbox = page.locator('input[type="checkbox"]').first();
    await fruitsCheckbox.click();
    await takeScreenshot('fruits-selected');
    await page.waitForTimeout(1000);

    // 2. Uncheck Apple to show parent deselection
    console.log('Unchecking Apple...');
    const appleCheckbox = page.locator('label:has-text("Apple")').locator('../input[type="checkbox"]');
    await appleCheckbox.click();
    await takeScreenshot('apple-unchecked');
    await page.waitForTimeout(1000);

    // 3. Check Apple back to show parent auto-selection
    console.log('Checking Apple back...');
    await appleCheckbox.click();
    await takeScreenshot('apple-checked-back');
    await page.waitForTimeout(1000);

    // 4. Click on Citrus to show nested behavior
    console.log('Clicking Citrus...');
    const citrusCheckbox = page.locator('label:has-text("Citrus")').locator('../input[type="checkbox"]');
    await citrusCheckbox.click();
    await takeScreenshot('citrus-unchecked');
    await page.waitForTimeout(1000);

    // 5. Uncheck Orange individually
    console.log('Unchecking Orange...');
    const orangeCheckbox = page.locator('label:has-text("Orange")').locator('../input[type="checkbox"]');
    await orangeCheckbox.click();
    await takeScreenshot('orange-unchecked');
    await page.waitForTimeout(1000);

    // 6. Check Orange back to show nested parent selection
    console.log('Checking Orange back...');
    await orangeCheckbox.click();
    await takeScreenshot('orange-checked-back');
    await page.waitForTimeout(1000);

    // 7. Click on Vegetables to show second hierarchy
    console.log('Clicking Vegetables...');
    const vegetablesCheckbox = page.locator('label:has-text("Vegetables")').locator('../input[type="checkbox"]');
    await vegetablesCheckbox.click();
    await takeScreenshot('vegetables-selected');
    await page.waitForTimeout(1000);

    // Final state
    await takeScreenshot('final');
    
    console.log(`Demo screenshots created! ${frameCount} frames saved to ${screenshotsDir}/`);
    console.log('To create a GIF, run: ffmpeg -r 1 -i screenshots/frame-%03d-*.png -vf "fps=2,scale=600:400:flags=lanczos" demo.gif');
    
  } catch (error) {
    console.error('Error creating demo:', error);
  } finally {
    await browser.close();
  }
}

// Check if dev server is running, if not start it
const { spawn } = require('child_process');

async function startDevServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting development server...');
    const devServer = spawn('npm', ['run', 'dev'], {
      stdio: 'pipe',
      detached: false
    });

    devServer.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('Dev server:', output);
      if (output.includes('localhost:5173') || output.includes('Local:')) {
        setTimeout(resolve, 2000); // Wait 2 seconds after server starts
      }
    });

    devServer.stderr.on('data', (data) => {
      console.error('Dev server error:', data.toString());
    });

    devServer.on('error', reject);
    
    // Timeout after 30 seconds
    setTimeout(() => {
      reject(new Error('Dev server failed to start within 30 seconds'));
    }, 30000);
  });
}

async function main() {
  try {
    await startDevServer();
    await createDemo();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}