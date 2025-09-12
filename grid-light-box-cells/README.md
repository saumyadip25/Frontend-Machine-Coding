# Grid Light Box Cells Problem

## Problem Statement

Create a **lightbox grid system** that simulates toggle behavior in a 2D matrix.

### Requirements

- Each cell can be toggled on/off
- Clicking a cell should toggle adjacent cells as well (up, down, left, right)
- Handle all edge cases like corner cells, edges, etc.

### Expectations

- Code quality
- Proper state management
- Reusable Components
- Edge case handling
- Clean UI and interactivity

## Example Behavior

```
Initial Grid (3x3):
[ ][ ][ ]
[ ][ ][ ]
[ ][ ][ ]

After clicking center cell (1,1):
[ ][■][ ]
[■][■][■]
[ ][■][ ]

After clicking corner cell (0,0):
[■][■][ ]
[■][ ][■]
[ ][■][ ]
```

_Note: ■ represents an active/lit cell, [ ] represents an inactive cell_
