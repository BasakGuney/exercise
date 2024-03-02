
public class BTree {
	int count2=0;
	Node root;
	Node newNode(int data) {
		root=new Node(data);
		return root;
	}
	Node insert_rec(Node root, int data) {
		if(root!=null) {
			if(data<root.data)
				root.left=insert_rec(root.left,data);
			else
				root.right=insert_rec(root.right,data);
		}
		else
			root=new Node(data);
		return root;
	}
	public void insert(int data) {
		root=insert_rec(root,data);
	}
	int leaf_number(Node root) {
		if(root.right==null && root.left!=null) {
			return leaf_number(root.left);
		}
		else if(root.right==null && root.left!=null) {
			return leaf_number(root.right);
		}
		else if(root.right!=null && root.left!=null) {
			return leaf_number(root.right)+leaf_number(root.left);
		}
		else {
			return 1;
		}
	}
	
}
