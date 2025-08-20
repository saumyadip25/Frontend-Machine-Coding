# React Pagination Demo

A React application demonstrating pagination functionality with data fetching from an external API.

## Features

- Product display with thumbnail images
- Pagination with smart page controls
- Data fetching with loading and error states
- Responsive design

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Pagination.jsx    # Pagination controls with ellipsis
│   └── Products.jsx      # Product grid display
├── hooks/
│   └── useDataFetch.js   # Custom hook for API calls
├── App.jsx              # Main application component
└── main.jsx             # Application entry point
```

## Configuration

- Products per page: 10
- Total records: 194
- Pagination step: 5 visible page numbers
