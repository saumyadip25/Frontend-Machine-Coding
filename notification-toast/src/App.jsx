import { useState } from "react";
import ToastContainer from "./ToastContainer";
import Toast from "./Toast";

function App() {
  const [toast, setToast] = useState([]);

  const handleAddToast = (type, position) => {
    setToast((prev) => [
      ...prev,
      {
        type,
        text: `Message ${type} ${Date.now()}`,
        id: Date.now(),
        position,
      },
    ]);
  };

  const positions = ["top-left", "top-right", "bottom-left", "bottom-right"];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <h1>Add new Notification</h1>
        <button onClick={() => handleAddToast("success", "top-right")}>
          Success (Top Right)
        </button>
        <button onClick={() => handleAddToast("failure", "bottom-left")}>
          Failure (Bottom Left)
        </button>
        <button onClick={() => handleAddToast("success", "top-left")}>
          Success (Top Left)
        </button>
        <button onClick={() => handleAddToast("failure", "bottom-right")}>
          Failure (Bottom Right)
        </button>
      </div>

      {/* Toast containers for all positions */}
      {positions.map((pos) => (
        <ToastContainer key={pos} position={pos}>
          {toast
            .filter((t) => t.position === pos)
            .map((item) => (
              <Toast key={item.id} {...item} />
            ))}
        </ToastContainer>
      ))}
    </div>
  );
}

export default App;
