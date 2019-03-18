const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		let nodePush = new Node(data,priority);
		this.insertNode(nodePush);
		this.shiftNodeUp(nodePush);	
	}

	pop() {
		if(!this.root){
			return;
		}
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
	}

	isEmpty() {
		
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
	}

	shiftNodeDown(node) {
	}
}

module.exports = MaxHeap;
