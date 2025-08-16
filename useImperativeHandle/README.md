# useImperativeHandle Hook Demo

A React application demonstrating the `useImperativeHandle` hook with a practical example of moving items between Indoor and Outdoor activity lists.

## What is useImperativeHandle?

• **Purpose**: Exposes specific functions from a child component to its parent
• **Use Case**: When parent needs to call child component methods directly
• **Requirement**: Must be used with `forwardRef` to receive the ref from parent

## Code Implementation

### Key Components:
• **App.jsx**: Parent component that holds reference to Outdoor component
• **Indoor.jsx**: Child component with clickable items that move to outdoor list
• **Outdoor.jsx**: Child component using `useImperativeHandle` to expose `addOutdoor` method

### useImperativeHandle Usage:
```javascript
useImperativeHandle(
  ref,
  () => {
    return {
      addOutdoor: addOutdoor,
    };
  },
  []
);
```

## How It Works

• Parent creates a ref using `useRef()` (`outdoorRef` in App.jsx:6)
• Child component wrapped with `forwardRef` to receive the ref (Outdoor.jsx:3)
• `useImperativeHandle` exposes specific methods to parent (Outdoor.jsx:10-18)
• Parent calls child methods via `outdoorRef.current.addOutdoor()` (App.jsx:9)

## Demo Features

• Click indoor activities (Chess, Ludo, Catan) to move them to outdoor list
• Items are removed from indoor list and added to outdoor list
• Demonstrates parent-child communication through imperative handle

## Running the Project

```bash
npm install
npm run dev
```
