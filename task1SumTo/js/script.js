'use strict';

function sumTo(n) {
    var result = 0;
    if (n > 1) {
        return result += n + sumTo(n-1);
    } else {
        return n;
    }
}

alert(sumTo(100));
