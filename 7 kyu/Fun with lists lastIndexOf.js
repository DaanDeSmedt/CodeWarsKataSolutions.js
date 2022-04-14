/*
    Title: Fun with lists: lastIndexOf

    Description:
    Implement the method lastIndexOf (lastindexof in PHP), which accepts a linked list (head) and a value, and returns the index (zero based) of the last occurrence of that value if exists, or -1 otherwise.
    
    For example:
    Given the list: 1 -> 2 -> 3 -> 3, and the value 3, lastIndexOf / lastindexof should return 3.
    
    The linked list is defined as follows:
    
    function Node(data, next = null) {
      this.data = data;
      this.next = next;
    }
    class Node {
      public Object data;
      public Node next;
    
      Node(T data, Node next) {
        this.data = data;
        this.next = next;
      }
    
      Node(T data) {
        this(data, null);
      }
    }
    class Node {
      public $data, $next;
      public function __construct($data, $next = NULL) {
        $this->data = $data;
        $this->next = $next;
      }
    }
    data class Node(val data: Any?, val next: Node?=null)
    
    Note: the list may be null and can hold any type of value.
    
    Good luck!
    
    This kata is part of fun with lists series:
    
    Fun with lists: length
    Fun with lists: indexOf
    Fun with lists: lastIndexOf
    Fun with lists: countIf
    Fun with lists: anyMatch + allMatch
    Fun with lists: filter
    Fun with lists: map
    Fun with lists: reduce

    Link to Kata : https://www.codewars.com/kata/581c867a33b9fe732e000076
*/

function lastIndexOf(head, value) {
  let current = head, values = []
  while (current !== null) {
    values.push(current.data)
    current = current.next
  }
  return values.lastIndexOf(value)
}