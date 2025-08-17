function editChild(commentsArray, nodeId, newMessage) {
  for (let comment of commentsArray) {
    if (comment.id === nodeId) {
      comment.message = newMessage;
      return true;
    }
    if (editChild(comment.child, nodeId, newMessage)) {
      return true;
    }
  }
  return false;
}

export default editChild;
