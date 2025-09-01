const Card = ({ todo }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: "4px",
      padding: "10px",
      margin: "6px",
      maxWidth: "300px",
    }}
  >
    <h3>{todo.title}</h3>
    <p>User: {todo.userId}</p>
    <p>Status: {todo.completed ? "✅ Completed" : "⏳ Pending"}</p>
  </div>
);

export default Card;
