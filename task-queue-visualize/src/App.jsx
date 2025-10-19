import { useState, useEffect, useRef } from "react";
import Progress from "./Progress";

const CONCURRENCY = 3;
const TIME_DELAY = 1000;

function App() {
  const [input, setInput] = useState("");
  const [executionTime, setExecutionTime] = useState(4000); // Default 4 seconds
  const [tasks, setTasks] = useState([]);
  const timer = useRef(null);

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleExecutionTimeChange = (e) => {
    setExecutionTime(Number(e.target.value));
  };

  useEffect(() => {
    if (tasks.length === 0) {
      return;
    }

    const allCompleted = tasks.every((task) => task.status === "completed");

    if (allCompleted) {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }
      return;
    }

    if (timer.current) {
      clearInterval(timer.current);
    }

    timer.current = setInterval(() => {
      setTasks((prevTasks) => {
        const newTasks = [...prevTasks];

        // Count currently running tasks
        const runningCount = newTasks.filter(
          (task) => task.status === "inprogress"
        ).length;

        // Track how many tasks we're starting in THIS iteration
        let slotsUsed = 0;

        for (let i = 0; i < newTasks.length; i++) {
          const task = newTasks[i];

          if (task.width >= 100) {
            // Mark as completed
            newTasks[i] = { ...task, status: "completed" };
          } else if (task.status === "inprogress") {
            // Calculating increment based on execution time
            // increment = (TIME_DELAY / executionTime) * 100
            const increment = (TIME_DELAY / task.executionTime) * 100;
            const newWidth = Math.min(task.width + increment, 100);

            newTasks[i] = {
              ...task,
              width: newWidth,
            };
          } else if (task.status === "pending") {
            // Check if we can start this task
            if (runningCount + slotsUsed < CONCURRENCY) {
              const increment = (TIME_DELAY / task.executionTime) * 100;
              newTasks[i] = {
                ...task,
                status: "inprogress",
                width: increment,
              };
              slotsUsed++;
            }
          }
        }

        return newTasks;
      });
    }, TIME_DELAY);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
      }
    };
  }, [tasks]);

  const handleAddTasks = () => {
    if (input.trim() !== "") {
      const newTask = {
        id: Date.now(),
        taskName: input,
        width: 0,
        status: "pending",
        executionTime: executionTime,
      };
      setTasks((prev) => [...prev, newTask]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <input
          value={input}
          onChange={handleChange}
          placeholder="Task name"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <select
          value={executionTime}
          onChange={handleExecutionTimeChange}
          style={{ marginRight: "10px", padding: "5px" }}
        >
          <option value={1000}>1 second</option>
          <option value={4000}>4 seconds</option>
          <option value={8000}>8 seconds</option>
          <option value={12000}>12 seconds</option>
        </select>
        <button onClick={handleAddTasks}>Add Task</button>
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              style={{
                display: "flex",
                margin: "10px",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div style={{ minWidth: "100px" }}>{task.taskName}</div>
              <Progress width={task.width} />
              <div style={{ minWidth: "80px" }}>{task.status}</div>
              <div
                style={{ minWidth: "60px", fontSize: "12px", color: "#666" }}
              >
                {task.executionTime / 1000}s
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
