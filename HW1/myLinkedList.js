class Node{
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }

    next = null;
    data = null;
}

class LinkedList {

    first = null;
    length = 0;
    add(data){
        if(!this.first){
            this.first = new Node(data, null);
            this.length++;
            return;
        }
        let nodeNow = this.first;
        while (nodeNow.next){
            nodeNow = nodeNow.next;
        }
        nodeNow.next = new Node(data, null);
        this.length++;
    }

    print(){
        let result = "";

        result = result + this.first.data + "->";
        let nodeNow = this.first.next;
        while (nodeNow.next){
            result = result + nodeNow.data + "->";
            nodeNow = nodeNow.next;
        }
        result = result + nodeNow.data;

        console.log(result);
    }

    remove(nodeForDelete){
        let nodeNow = this.first;

        while (nodeNow !== nodeForDelete){
            nodeNow = nodeNow.next;
        }

        nodeNow.next = nodeForDelete.next;
        return nodeNow;
    }

    isHas(data){
        let nodeNow = this.first;
        while (nodeNow){
            if(nodeNow.data === data){
                return true;
            }
            nodeNow = nodeNow.next;
        }
        return false;
    }
}

function deleteDuplicate(linkedList){
    let resultLL = new LinkedList();

    resultLL.add(linkedList.first.data);

    let nodeNow = linkedList.first.next;

    while (nodeNow){
        if(resultLL.isHas(nodeNow.data)){
            nodeNow = nodeNow.next;
            continue;
        }
        resultLL.add(nodeNow.data);
        nodeNow = nodeNow.next;
    }

    return resultLL;
}
function main(){
    let ll = new LinkedList();

    ll.add(4);
    ll.add(2);
    ll.add(3);
    ll.add(4);
    ll.add(3);
    ll.add(6);

    ll.print();

    ll = deleteDuplicate(ll);

    ll.print();
}

main();
