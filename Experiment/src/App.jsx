import { useState, useTransition } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const bigList = Array.from({ length: 10000 }, (_, i) => "Item " + i);

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);

    // Mark heavy update as a transition
    startTransition(() => {
      const filtered = bigList.filter((item) =>
        item.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} placeholder="Search..." />
      {isPending && <p>Loading...</p>}
      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
