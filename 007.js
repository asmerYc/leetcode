class nodeList  {
    constructor(val,next=null) {
        this.val = val;
        this.next = next;
    }
}

const addTwoNumbers = (l1, l2) => {
    let head = new nodeList(0);
    let current = head;
    let carry = 0;

    while(l1 !== null || l2 !== null || carry !==0) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const sum = x + y + carry;
        carry = Math.floor( sum / 10);

        current.next= new nodeList()
    }
}