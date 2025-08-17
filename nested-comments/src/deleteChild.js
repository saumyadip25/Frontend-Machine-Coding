function deleteChild(commentsArray, nodeId) {
  for (let i = 0; i < commentsArray.length; i++) {
    if (commentsArray[i].id === nodeId) {
      commentsArray.splice(i, 1); // Remove 1 element at index i
      return true;
    }

    if (deleteChild(commentsArray[i].child, nodeId)) {
      return true;
    }
  }
  return false;
}

export default deleteChild;
