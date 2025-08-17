import { useState } from "react";

const Comment = (props) => {
  const [showReply, setShowReply] = useState(false);
  const [reply, setReply] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const {
    messageData,
    addReply,
    deleteComment,
    editComment,
    handleAddDislike,
    handleAddLike,
  } = props;
  const { id, message, likeCount, dislikeCount, child } = messageData;

  const handleShowReply = () => {
    setShowReply(true);
  };

  const handleHideReply = () => {
    setShowReply(false);
    setReply("");
  };

  const handleReply = (e) => {
    setReply(e.target.value);
  };

  const handleReplySubmit = () => {
    if (reply.trim().length > 0) {
      addReply(id, reply);
      handleHideReply();
    }
  };

  const handleDeleteComment = () => {
    deleteComment(id);
  };

  const handleEditStart = () => {
    setIsEditing(true);
    setEditText(message);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setEditText("");
  };

  const handleEditSave = () => {
    if (editText.trim().length > 0) {
      editComment(id, editText);
      setIsEditing(false);
      setEditText("");
    }
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const addLike = () => {
    handleAddLike(id);
  };

  const addDislike = () => {
    handleAddDislike(id);
  };

  return (
    <>
      <div
        style={{
          width: "400px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
      >
        <div style={{ marginBottom: "10px", display: "flex" }}>
          {isEditing ? (
            <input
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
              value={editText}
              onChange={handleEditChange}
              placeholder="Edit your comment..."
            />
          ) : (
            <input
              placeholder="Write your comment..."
              style={{
                width: "80%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "3px",
              }}
              value={message}
              readOnly
            />
          )}
          <div style={{ display: "flex", gap: "5px", marginLeft: "10px" }}>
            {isEditing ? (
              <>
                <button onClick={handleEditSave}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={handleEditStart}>Edit</button>
                <button onClick={handleShowReply}>Reply</button>
                <button onClick={handleDeleteComment}>Delete</button>
              </>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <button onClick={addLike}>Like</button>
              <span>{likeCount}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <button onClick={addDislike}>Dislike</button>
              <span>{dislikeCount}</span>
            </div>
          </div>
        </div>

        {showReply && (
          <div
            style={{
              marginTop: "15px",
              padding: "10px",
              backgroundColor: "#f8f9fa",
              borderRadius: "4px",
              border: "1px solid #e9ecef",
            }}
          >
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <input
                value={reply}
                onChange={handleReply}
                placeholder="Write your reply..."
                style={{
                  flex: 1,
                  padding: "6px 10px",
                  border: "1px solid #ced4da",
                  borderRadius: "3px",
                  fontSize: "14px",
                }}
              />
              <button
                onClick={handleReplySubmit}
                disabled={reply.trim().length === 0}
              >
                Reply
              </button>
              <button onClick={handleHideReply}>Cancel</button>
            </div>
          </div>
        )}
      </div>
      {child?.map((child) => {
        return (
          <div style={{ paddingLeft: "50px" }} key={child.id}>
            <Comment
              messageData={child}
              addReply={addReply}
              deleteComment={deleteComment}
              editComment={editComment}
              handleAddLike={handleAddLike}
              handleAddDislike={handleAddDislike}
            />
          </div>
        );
      })}
    </>
  );
};

export default Comment;
