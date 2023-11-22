// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
//  链表（Linked List）是一种线性数据结构，它由一系列节点组成，每个节点包含数据和指向下一个节点的引用（或链接）。与数组不同，链表的元素在内存中不是顺序存储的，而是通过指针相互连接。

// 链表有多种类型，其中最基本的两种是单向链表和双向链表：
// 单向链表（Singly Linked List）： 每个节点包含数据和指向下一个节点的引用。
// | Data | Next --> | Data | Next --> | Data | Next --> null


// 双向链表（Doubly Linked List）： 每个节点包含数据、指向下一个节点的引用以及指向前一个节点的引用。
// null <-- Prev | Data | Next --> | Data | Next --> | Data | Next --> null


// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  const addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
  
    while (l1 !== null || l2 !== null || carry !== 0) {
      const x = l1 ? l1.val : 0;
      const y = l2 ? l2.val : 0;
  
      const sum = x + y + carry;
      carry = Math.floor(sum / 10);
  
      current.next = new ListNode(sum % 10);
      current = current.next;
        console.log(current, 'current');
        console.log(current.next, 'current.next');
      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
    }
  
    return dummyHead.next;
  };
  
  // 示例链表
  const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
  const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

  
  // 计算和
  const result = addTwoNumbers(l1, l2);
  
  // 输出结果
  console.log(result);