const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}
	push(data, priority) {
		const nodePush = new Node(data,priority);
		this.insertNode(nodePush);
		this.shiftNodeUp(nodePush);
		this.heapSize +=1;
	}

	pop() {
		
		if(this.root){
			let data = this.root.data;
			this.detachRoot();
			return data;
		}
		this.heapSize -=1;	
	}

	detachRoot() {
		const detachedRoot = this.root;
		this.root = null;
		this.parentNodes.shift();
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		if(this.parentNodes.length == 0){
			return true;
		} else {
			return false;
		}
	}

	clear() {
		this.root = null;
		this.parentNodes=[];
		
	}

	insertNode(node) {
			if (this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
			} else {
			this.parentNodes[0].appendChild(node);
			if (this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
				this.parentNodes.shift();
			}
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		let nodePosition = this.parentNodes.indexOf(node);
		let parentPosition = this.parentNodes.indexOf(node.parent);
		if (node.parent == null){
			this.root = node;
		} else
		if(node.priority>node.parent.priority){
			if(parentPosition !== -1){
				this.parentNodes[nodePosition] = node.parent;
				this.parentNodes[parentPosition] = node;
			} else {
				this.parentNodes[nodePosition] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		} 
	}
	shiftNodeDown(node) {
	}
}

module.exports = MaxHeap;
