
// half done

var getIntersectionNode = function(headA, headB) {
    const set = new Set();
    let a = headA;
    let b = headB;
    
    while(a && b){
        if(a === b){
            return a.val;
        }
        if(set.has(a)){
            return a.val;
        } else {
            set.add(a);
        }
        
        if(set.has(b)){
            return b.val;
        } else {
            set.add(b);
        }
        
        a = a.next;
        b = b.next;
    }
    
    return null;
};  