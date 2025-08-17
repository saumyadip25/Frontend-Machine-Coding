# Nested Comments System

A React-based nested comments application that demonstrates tree data structure operations with a clean, interactive UI. This project showcases fundamental concepts of recursive algorithms, state management, and component composition in React.

## 🚀 Features

### Core Functionality

- **Add Comments**: Create top-level comments with a simple input interface
- **Nested Replies**: Reply to any comment at any depth level with visual indentation
- **Edit Comments**: In-place editing of comment text with save/cancel options
- **Delete Comments**: Remove comments and all their nested replies
- **Like/Dislike System**: Interactive voting system with real-time count updates

### Technical Highlights

- **Recursive Tree Operations**: Efficient traversal and manipulation of nested comment structures
- **Pure Functions**: Modular utility functions for tree operations
- **State Management**: React hooks for managing complex nested state
- **Component Composition**: Reusable Comment component with recursive rendering

## 🏗️ Architecture

### Component Structure

```
App.jsx                 - Main application component with state management
├── Comment.jsx         - Recursive comment component with UI logic
└── Utility Functions/
    ├── appendChild.js  - Add replies to nested structure
    ├── deleteChild.js  - Remove comments from tree
    ├── editChild.js    - Modify comment content
    └── likeUtils.js    - Handle like/dislike operations
```

### Data Structure

Each comment follows this structure:

```javascript
{
  id: timestamp,           // Unique identifier
  message: string,         // Comment content
  likeCount: number,       // Number of likes
  dislikeCount: number,    // Number of dislikes
  child: []               // Array of nested replies
}
```

## 🔧 Implementation Details

### Tree Operations Solved

#### 1. **Recursive Tree Traversal** (`appendChild.js:14-16`)

- Implements depth-first search to find parent nodes
- Adds new replies at the correct nesting level
- Uses early exit optimization for performance

#### 2. **Node Deletion** (`deleteChild.js:4-8`)

- Safely removes nodes and all descendants
- Maintains tree integrity after deletion
- Handles both leaf and branch node removal

#### 3. **In-Place Editing** (`editChild.js:3-7`)

- Traverses tree to find target node
- Updates message content without affecting structure
- Preserves all other node properties

#### 4. **Like/Dislike Management** (`likeUtils.js:4-12`)

- Independent like and dislike counters
- Recursive search for target comments
- Real-time UI updates with state synchronization

### React Patterns Demonstrated

#### 1. **Recursive Component Rendering** (`Comment.jsx:178-191`)

```javascript
{
  child?.map((child) => (
    <div style={{ paddingLeft: "50px" }} key={child.id}>
      <Comment messageData={child} {...props} />
    </div>
  ));
}
```

#### 2. **Conditional Rendering** (`Comment.jsx:84-121`)

- Edit mode vs display mode switching
- Dynamic button visibility
- Form state management

#### 3. **Event Handling** (`App.jsx:26-64`)

- Prop drilling for nested operations
- State immutability with spread operators
- Function composition for complex operations

## 🛠️ Technical Stack

- **React 19.1.1** - Core framework with latest hooks
- **Vite 7.1.2** - Fast build tool and dev server
- **ESLint** - Code linting and formatting
- **Pure JavaScript** - No external dependencies for core logic

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```
