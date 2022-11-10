import logo from './logo.svg';
import './App.css';

function App() {

  class Node {
    constructor(data) {
      this.left = null;
      this.right = null;
      this.data = data;
    }
  }

  let root;

  /* returns 1 if children sum property holds for the given
  node and both of its children*/
  function isSumProperty(node) {

    /* left_data is left child data and right_data is for right
       child data*/
    let left_data = 0, right_data = 0;

    /* If node is NULL or it's a leaf node then
    return true */
    if (node == null
      || (node.left == null && node.right == null))
      return 1;
    else {

      /* If left child is not present then 0 is used
         as data of left child */
      if (node.left != null)
        left_data = node.left.data;

      /* If right child is not present then 0 is used
         as data of right child */
      if (node.right != null)
        right_data = node.right.data;

      /* if the node and both of its children satisfy the
         property return 1 else 0*/
      if ((node.data == left_data + right_data) && (isSumProperty(node.left) != 0) && isSumProperty(node.right) != 0)
        return 1;
      else
        return 0;
    }
  }

  root = new Node(11);
  root.left = new Node(8);
  root.right = new Node(2);
  root.left.left = new Node(3);
  root.left.right = new Node(5);
  root.right.right = new Node(2);
  if (isSumProperty(root) != 0) {
    document.write("The given tree satisfies the children" + " sum property");
  }
  else {

    document.write("The given tree does not satisfy children" + " sum property");
  }
  return (<div>Hey</div>);
}

export default App;
