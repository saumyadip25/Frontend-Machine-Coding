# Progress Bar Component

A smooth, GPU-accelerated progress bar with manual control using CSS transforms.

## Features

- ✅ Smooth animation using `transform: scaleX()` (no reflows/repaints)
- ✅ Manual start/reset control
- ✅ 3-second animation duration
- ✅ GPU-accelerated performance

## Usage

```jsx
import ProgressBar from "./ProgressBar";

function App() {
  return <ProgressBar />;
}
```

## Controls

- **Start Progress** - Begins the fill animation
- **Reset** - Returns progress bar to empty state

## Browser Support

Works on all modern browsers that support CSS transforms and transitions.
