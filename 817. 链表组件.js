var numComponents = function(head, G) {
  if(!head){
      return 0
  }
  const stack = []
  let cur = head
  while(cur){
      stack.push(cur.val)
      cur = cur.next
  }
  
};