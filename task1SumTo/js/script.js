'use strict';

function sumTo(n) {
    if (n > 1) {
        return n + sumTo(n-1);
    } else {
        return n;
    }
}
var n = +prompt('Введите число');
alert('Сумма чисел с 1 по ' + n + ' включительно = ' + sumTo(n));
