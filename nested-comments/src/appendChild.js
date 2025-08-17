function appendChild(commentsArray, parentId, message) {
  for (let comment of commentsArray) {
    if (comment.id === parentId) {
      const newReplyObject = {
        id: Date.now(),
        message: message,
        likeCount: 0,
        dislikeCount: 0,
        child: [],
      };
      comment.child.push(newReplyObject);
      return true;
    }
    if (appendChild(comment.child, parentId, message)) {
      return true; // Early exit when child found it
    }
  }
  return false;
}

export default appendChild;
