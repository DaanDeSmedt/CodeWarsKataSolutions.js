/*
    Title: Fun with lists: length

    Description:
    Implement the method length, which accepts a linked list (head), and returns the length of the list.
    
    For example:
    Given the list: 1 -> 2 -> 3 -> 4, length should return 4.
    
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
    class Node:
        def init(self, data, next=None):
            self.data = data
            self.next = next
    template
    class Node
    {
    public:
        T data;
        Node *next;
        Node(T x, Node *p = NULL) : data(x), next(p) {}
        Node() : next(NULL) {}
    };
    typedef struct node_t {
        void *data;
        struct node_t *next;
    } Node;
    typedef struct node_t {
        void *data;
        struct node_t *next;
    } Node;
    
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

    Link to Kata : https://www.codewars.com/kata/581e476d5f59408553000a4b
*/

function length(head) {
  let current = head, length = 0
  while (current !== null) {
    length++;
    current = current.next
  }
  return length;
}