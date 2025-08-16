# Stopwatch

A simple, functional stopwatch application built with React and Vite.

## Features

- **Start/Pause/Reset**: Basic stopwatch controls
- **Time Display**: Shows elapsed time in HH:MM:SS format
- **State Management**: Proper interval cleanup to prevent memory leaks
- **UI Controls**: Intuitive button states (disabled when appropriate)

## Tech Stack

- React 19.1.1
- Vite 7.1.0
- ESLint for code quality

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

- `src/App.jsx` - Main stopwatch component with timer logic
- `src/main.jsx` - React app entry point
- `package.json` - Project dependencies and scripts
