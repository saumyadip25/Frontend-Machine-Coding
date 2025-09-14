import Toggle from "./Toggle";

const App = () => {
  return (
    <div>
      <Toggle
        render={(toggle, handleToggle) => {
          return (
            <div>
              {toggle && <div> toggle is on </div>}
              {!toggle && <div> toggle is off </div>}
              <button onClick={handleToggle}>Click</button>
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
