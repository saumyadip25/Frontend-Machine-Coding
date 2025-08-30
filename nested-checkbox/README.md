# Nested Checkbox

A React component that implements hierarchical checkboxes with automatic parent-child synchronization.

## Features

- **Nested Structure**: Supports multi-level checkbox hierarchies
- **Auto Sync**: Parent checkboxes automatically update when all children are selected/deselected
- **Child Cascade**: Selecting a parent automatically selects/deselects all children
- **Clean UI**: Simple, indented layout for clear hierarchy visualization

## Quick Start

```bash
npm install
npm run dev
```

## Usage

The component uses a tree data structure where each node can have children:

```javascript
const checkboxData = [
  {
    id: 1,
    label: "Fruits",
    children: [
      { id: 2, label: "Apple" },
      { id: 3, label: "Banana" },
      {
        id: 4,
        label: "Citrus",
        children: [
          { id: 5, label: "Orange" },
          { id: 6, label: "Lemon" },
        ],
      },
    ],
  },
  {
    id: 7,
    label: "Vegetables",
    children: [
      { id: 8, label: "Carrot" },
      { id: 9, label: "Broccoli" },
    ],
  },
];
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
