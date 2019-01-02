function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * 根据数组创建链表
 * @param {Array<number>} arr 
 */
function arr2List(arr){
  let node;
  let head;
  arr.forEach(item => {
    let temp = new ListNode(item)
    if(node){
      node.next = temp
    }else{
      head = temp
    }
    node = temp
  })

  return head;
}

module.exports = {
  arr2List
}