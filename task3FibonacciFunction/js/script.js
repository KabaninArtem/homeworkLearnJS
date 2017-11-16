// Slow solution

// function fib(n) {
//     if (n > 2) {
//         return fib(n - 1) + fib(n - 2);
//     } else {
//         return 1;
//     }
// }


// Fast solution

function fib(n) {
    var a = 1;
    var b = 1;
    var result = 0;

    for (var i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return a;
}

var n = +prompt('Введите позицию числа Фибоначчи');
alert('Число с ' + n + ' позиции = ' +  fib(n));