function factorial(n) {
    if (n === 1 ) {
        return n;
    } else {
        return n * factorial(n - 1);
    }
}

var n = +prompt('Введите число для расчета факториала');
alert('Факториал ' + n + ' = ' + factorial(n));