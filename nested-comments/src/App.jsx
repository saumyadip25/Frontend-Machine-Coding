import { useState } from "react";
import Comment from "./Comment";
import appendChild from "./appendChild";
import deleteChild from "./deleteChild";
import editChild from "./editChild";
import { addDislike, addLike } from "./likeUtils";

function App() {
  const [comment, setComment] = useState("");
  const [addComment, setAddComment] = useState([]);

  const handleAddComment = () => {
    if (comment.length > 0) {
      const messageData = {
        id: Date.now(),
        message: comment,
        likeCount: 0,
        dislikeCount: 0,
        child: [],
      };
      setAddComment((prev) => [...prev, messageData]);
    }
    setComment("");
  };

  const addReply = (parentId, reply) => {
    setAddComment((prev) => {
      const updated = [...prev];
      appendChild(updated, parentId, reply);
      return updated;
    });
  };

  const deleteComment = (nodeId) => {
    setAddComment((prev) => {
      const updated = [...prev];
      deleteChild(updated, nodeId);
      return updated;
    });
  };

  const editComment = (nodeId, newMessage) => {
    setAddComment((prev) => {
      const updated = [...prev];
      editChild(updated, nodeId, newMessage);
      return updated;
    });
  };

  const handleAddLike = (nodeId) => {
    setAddComment((prev) => {
      const updated = [...prev];
      addLike(updated, nodeId);
      return updated;
    });
  };

  const handleAddDislike = (nodeId) => {
    setAddComment((prev) => {
      const updated = [...prev];
      addDislike(updated, nodeId);
      return updated;
    });
  };

  return (
    <>
      <div style={{ marginBottom: "20px", width: "500px" }}>
        <input
          style={{ width: "200px" }}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <button
          style={{ marginLeft: "10px" }}
          onClick={handleAddComment}
          disabled={comment.length === 0}
        >
          Add Comment
        </button>
      </div>
      {addComment.map((comment) => {
        return (
          <Comment
            key={comment.id}
            messageData={comment}
            addReply={addReply}
            deleteComment={deleteComment}
            editComment={editComment}
            handleAddLike={handleAddLike}
            handleAddDislike={handleAddDislike}
          />
        );
      })}
    </>
  );
}

export default App;
