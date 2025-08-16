# Typeahead Search Component

A performant React typeahead component that provides real-time search suggestions with debounced API calls and highlighted matching text.

## Problem We're Solving

Traditional search inputs either flood APIs with requests on every keystroke or provide poor user experience with slow, unresponsive search. This typeahead component solves these issues by:

- **Debounced API calls** - Reduces server load by waiting 500ms after user stops typing
- **Real-time suggestions** - Fetches recipe data from DummyJSON API as user types  
- **Visual feedback** - Highlights matching text in search results and shows loading states
- **Clean UX** - Dropdown appears only when there are results and user has typed something

## Features

- Debounced search with 500ms delay
- Recipe search using DummyJSON API
- Text highlighting in dropdown results
- Loading and error state handling
- Responsive dropdown interface
