# Task Queue Visualizer

A React application that visualizes task queue execution with concurrency limits and progress tracking.

## What I Have Implemented

### Task Queue System with Concurrency Control

- **Concurrency Limit**: Maximum of 3 tasks can run simultaneously (configurable via `CONCURRENCY` constant)
- **Task States**: Tasks progress through three states - `pending`, `inprogress`, and `completed`
- **Smart Queue Management**: Tasks automatically start when slots become available as other tasks complete

### Task Configuration

- **Task Name Input**: Users can enter custom task names
- **Execution Time Selection**: Dropdown selector with predefined durations:
  - 1 second
  - 4 seconds (default)
  - 8 seconds
  - 12 seconds
- **Dynamic Task Creation**: Add tasks to the queue with specified execution times

### Visual Progress Tracking

- **Real-time Progress Bars**: Visual representation of task completion progress
- **Status Display**: Shows current state of each task (pending/inprogress/completed)
- **Execution Time Display**: Shows the configured duration for each task
- **Progress Updates**: Updates every 1 second (configurable via `TIME_DELAY`)

### Technical Implementation

- **Interval-based Updates**: Uses `setInterval` for smooth progress updates
- **Accurate Progress Calculation**: Progress increments calculated as `(TIME_DELAY / executionTime) * 100`
- **Slot Management**: Tracks available concurrency slots to prevent exceeding the limit
- **Auto-cleanup**: Timer automatically stops when all tasks are completed
- **React Hooks**: Utilizes `useState`, `useEffect`, and `useRef` for state management

### Features

- Add multiple tasks with different execution times
- Tasks queue automatically when concurrency limit is reached
- Visual feedback for task progress and status
- Clean, organized UI with task name, progress bar, status, and duration display
