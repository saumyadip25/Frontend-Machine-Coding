# Infinite Scrolling React App

React application demonstrating infinite scrolling functionality using Intersection Observer API and DummyJSON products API.

## Features

- **Infinite Scrolling**: Automatically loads more products when user scrolls to bottom
- **Performance Optimized**: Uses Intersection Observer API for efficient scroll detection
- **Error Handling**: Includes retry functionality for failed API requests
- **Loading States**: Visual feedback during data fetching

## Core Logic

### Key Components

#### App Component (`src/App.jsx`)
Main component handling infinite scroll logic with:
- **State Management**: `productsData`, `loading`, `error`, `page`, `hasMore`
- **Intersection Observer**: Detects when user reaches bottom of page
- **API Integration**: Fetches products from DummyJSON API with pagination

#### Products Component (`src/components/Products.jsx`)
Individual product card displaying thumbnail, title, and price.

### Implementation Details

#### Intersection Observer Setup
```javascript
// Observer watches target element at bottom of page
const observer = new IntersectionObserver((entries) => {
  const target = entries[0];
  if (target.isIntersecting && !loading && hasMore) {
    setPage((prev) => prev + 1);
  }
});
```

#### Pagination Logic
- **LIMIT**: 10 products per request
- **Skip Calculation**: `(page - 1) * LIMIT`
- **End Detection**: Stops loading when `products.length < LIMIT` or `page * LIMIT >= total`

#### Key Features
- **Prevents Duplicate Requests**: Checks `loading` and `hasMore` states
- **Automatic Cleanup**: Unobserves target on component unmount
- **Error Recovery**: Retry button for failed requests
- **End of Data Indication**: Shows message when all products loaded

## API

Uses [DummyJSON Products API](https://dummyjson.com/products) with pagination:
- Endpoint: `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
- Returns: `{products: [], total: number}`
