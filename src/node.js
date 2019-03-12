class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(!this.left){ 									
			this.left = node, node.parent = this;  
		}else if(this.left && !this.right){ 
			this.right = node, node.parent = this;	
		}
	}

	removeChild(node) {
		if(node == this.left){
			return this.left = null, node.parent = null; 
		}else if(node == this.right && node !== this.left){
			return this.right = null, node.parent = null;
		}else if(node != this.left && node != this.right){
			throw 'Node is not child of this node';
		}
	}

	remove() {
		if(this.parent){
			this.parent.removeChild(this);
		};
	}

	swapWithParent() {
		if(!this.parent){
			return;
		}

		if(this.parent.parent === null){
		}else if(this.parent.parent.left === this.parent && this.parent.parent){
				this.parent.parent.left = this;
			}
		else if(this.parent.parent.right === this.parent && this.parent.parent){
				this.parent.parent.right = this;
			}
		
		if(this.parent.left === this && this.parent.right){
			this.parent.right.parent = this;
		} else {
			if(this.parent.right===this && this.parent.left){
				this.parent.left.parent = this;
			}
		}
	}
}

module.exports = Node;
