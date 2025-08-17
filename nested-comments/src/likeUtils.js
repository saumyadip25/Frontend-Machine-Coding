function addLike(commentsArray, nodeId) {
  for (let i = 0; i < commentsArray.length; i++) {
    const comment = commentsArray[i];
    if (comment.id === nodeId) {
      comment.likeCount += 1;
      return true;
    }
    if (addLike(comment.child, nodeId)) {
      return true;
    }
  }
  return false;
}

function addDislike(commentsArray, nodeId) {
  for (let i = 0; i < commentsArray.length; i++) {
    const comment = commentsArray[i];
    if (comment.id === nodeId) {
      comment.dislikeCount += 1;
      return true;
    }
    if (addDislike(comment.child, nodeId)) {
      return true;
    }
  }
  return false;
}

export { addDislike, addLike };
