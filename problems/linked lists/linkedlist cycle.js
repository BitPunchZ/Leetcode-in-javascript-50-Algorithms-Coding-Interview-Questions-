var hasCycle = function(head) {
    let hare = head;
    let turtle = head;
    while(turtle && hare && hare.next){
            hare = hare.next.next;
            turtle = turtle.next;
            if(turtle==hare)return true;
        }
        return false;
};