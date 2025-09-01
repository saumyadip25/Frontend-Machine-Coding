import Toggle from "./Toggle";
import Card from "./Card";
import DataManager from "./DataManager";

function App() {
  return (
    <>
      <div>
        <Toggle
          render={(on, handleOn) => {
            return (
              <>
                {on && <div>Toggle is On</div>}
                {!on && <div>Toggle is Off</div>}
                <button onClick={handleOn}>Toggle</button>
              </>
            );
          }}
        />
      </div>
      <div>
        <DataManager
          render={({ data, loading, fetchData }) => (
            <div>
              <h1>Todos</h1>
              <button onClick={fetchData}>Load Todos</button>
              {loading && <p>Loading...</p>}
              <ul>
                {data.map((todo) => (
                  <li key={todo.id}>
                    {todo.title} {todo.completed ? "✅" : "⏳"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        />
      </div>
    </>
  );
}

export default App;
