# React Router Authentication Demo

A React application demonstrating React Router implementation with authentication using Higher-Order Components (HOC) and Context API for route protection.

## 🚀 Features

### Core Functionality

- **React Router v7** - Modern routing with `BrowserRouter` and declarative route configuration
- **Protected Routes** - Route guards using Higher-Order Components pattern
- **Authentication System** - Login/logout functionality with persistent auth state
- **Context API** - Global authentication state management
- **Route Navigation** - Dynamic navigation with protected and public routes

### Components

- **App Component** - Main navigation and landing page
- **About Page** - Protected route demonstrating auth requirements
- **Home Page** - Protected route with props passing
- **Login Page** - Public authentication form
- **AuthContext** - Context provider for authentication state
- **withAuth HOC** - Higher-order component for route protection
- **AllRoutes** - Centralized route configuration

## 🛠 Technologies Used

- **React 19.1.1** - Latest React features including hooks and concurrent rendering
- **React Router DOM v7.9.1** - Modern routing solution for React applications
- **React DOM 19.1.7** - React rendering library
- **Vite 7.1.2** - Fast build tool and development server
- **ESLint** - Code linting and quality assurance
- **TypeScript Types** - Type definitions for enhanced development experience

## 🔐 Authentication Flow

1. **Initial State** - User starts unauthenticated
2. **Route Protection** - `withAuth` HOC checks authentication status
3. **Redirect Logic** - Unauthenticated users redirected to `/login`
4. **Login Process** - User authenticates via login form
5. **Context Update** - Authentication state updated globally
6. **Route Access** - Protected routes become accessible

## 🎯 Key Learning Areas

- **HOC Pattern** - Higher-order components for cross-cutting concerns
- **React Router** - Modern routing patterns and navigation
- **Context API** - Global state management without external libraries
- **Route Protection** - Authentication-based access control
- **Component Composition** - Reusable authentication logic

## 🚀 Getting Started

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

### Linting

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Route Configuration

- `/` - Protected main app component
- `/about` - Protected about page
- `/home` - Protected home page (with props)
- `/login` - Public login page

All protected routes automatically redirect to `/login` when user is not authenticated.
