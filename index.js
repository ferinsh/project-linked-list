class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert node at the start
    insertFirst(value){
        this.head = new Node(value, this.head);
        this.size++;
    }

    //Insert node at the end
    insertLast(value){
        let node = new Node(value);
        let current;

        //Check if empty
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    //get List size
    getSize(){
        console.log(this.size);
        return this.size;
    }

    //get List head
    getHead(){
        console.log(this.head);
        return this.head;
    }

    // get list tail
    getTail(){
        let tail = this.head;

        let current = tail.next;
        while(current.next){
            current = current.next;
        }
        tail = current;

        console.log(tail);
        return tail;
    }

    // returns the node at the given index
    at(index){
        let current = this.head;
        let count = 0;
        let targetNode;

        while(current){
            if(count == index){
                console.log(current.value);
                targetNode = current;
            }
            count++;
            current = current.next;
        }

        return targetNode;
    }

    // pop() - remove the last element from the list
    pop() {
        if(!this.head){
          return null;
        }
    
        if(this.size === 1){
          this.head = null;
          this.size--;
          return;
        }
    
        let previous = this.head;
        let current = this.head;
    
        while(current.next){
          previous = current;
          current = current.next;
        }
    
        previous.next = null;
        this.size--;
      }

    // check if value is in list
    containsValue(value){

        let checkTail = this.getTail();
        if(checkTail.value === value){
            console.log("YES");
            return "tail";
        }

        if(!this.head){
            console.log("Empty list");
            return null;
        }

        if(this.size === 1){
            if(this.head.value == value){
                console.log("YES");
            }
        }
        
        let current = this.head;
        let flag = false;
        while(current.next){
            if(current.value == value){
                console.log("YES");
                return true;
            }
            current = current.next;
        }
        if(flag == false){
            console.log("NO");
            return false;
        }
    }

    //get index of value
    getIndex(value){
        if(this.containsValue(value)){
            let current = this.head;
            let count = 0;

            if(!this.head){
                console.log("Error - no head found");
            }
            if(this.size === 1){
                if(this.head.value == value){
                    console.log("Index" + 1);
                }
            }

            while(current.next){
                if(current.value == value){
                    console.log("At" + count);
                    return count;
                }
                count++;
                current = current.next;
            }
        }else{
            console.log("ERROR - Node not found");
        }

        let checkTail = this.getTail();
        if(checkTail.value == value){
            console.log("at " + this.size);
        }
    }

    //print data
    printListData() {
        let current = this.head;
        while (current){
            console.log(current.value);
            current = current.next;
        }
    }

    //print data as a string
    printString(){
        let current = this.head;
        let listString = '';

        while (current) {
            listString += `${current.value} -> `;
            current = current.next;
        }

        listString += 'null'; // Add null to indicate the end of the list
        return listString;
    }

    //insert node into given index
    insertAt(value, index) {
        if(this.size >= index){
            let previous = this.head;
            let current = this.head;
            let count = 0;
            
            while(current){
                if(count == (index - 1)){
                    previous = current;
                }
                if(count == index){
                    break;
                }
                count++;
                current = current.next;
            }

            let node = new Node(value, current);
            previous.next = node;
        }
    }

    //remove from an index
    removeAt(index) {
        if(this.size >= index){
            let nextNode = this.head;
            let current = this.head;
            let count = 0;
            let targetNode;
            let previous;

            while(current){
                if(count == (index - 1)){
                    previous = current;
                }
                if(count == index){
                    targetNode = current;
                }
                if(count == (index + 1)){
                    nextNode = current;
                    break;
                }
                count++;
                current = current.next;
            }

            console.log(previous);
            console.log(targetNode);
            console.log(nextNode);

            previous.next = nextNode;
            
        }
        
    }


}

class Node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

list = new LinkedList();
console.log(list);
list.insertFirst(100);
list.insertFirst(200);
list.insertFirst(300);
list.insertFirst(400);
console.log(list);
list.insertLast("HI");
list.insertLast("BYE");
list.printListData();
list.getSize();
list.getHead();
list.getTail();
list.insertLast("PODA");
list.getTail();
list.at(3);
list.pop();
list.containsValue(500);
list.containsValue(200);
list.getIndex(100);
list.insertLast("PODA");
list.getIndex("BYE");
list.getIndex("HI");
console.log(list.printString());
// list.containsValue("BYE");
// list.getIndex(200);
// list.getIndex(500);
