const deleteNode = (node) => {
  const { next } = node;
  const { val, next: nowNext } = next;
  node.val = val;
  node.next = nowNext;
};
