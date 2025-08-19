# Star Rating Component

A simple, interactive React star rating component built with Vite.

## Features

- Interactive star rating with hover effects
- Customizable number of stars
- Controlled component with value and onChange props
- Visual feedback on hover and selection

## Usage

```jsx
import StarRating from './StarRating';

function App() {
  const [rating, setRating] = useState(2);

  return (
    <StarRating 
      size={5} 
      value={rating} 
      onChange={setRating} 
    />
  );
}
```

## Props

- `size` - Number of stars to display
- `value` - Current rating value
- `onChange` - Callback function when rating changes

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
