import { useRef, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

function App() {
  const inputRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          console.log(inputRef.current?.value);
        }}
      >
        Click me
      </button>
      <ChildComponent ref={inputRef} />
    </div>
  );
}

export default App;
