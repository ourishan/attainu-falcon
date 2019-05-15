var ops = {
    '+': function (x, y) { return x + y },
    '-': function (x, y) { return x - y },
    '*': function (x, y) { return x * y },
    '/': function (x, y) { return x / y }
};
var opslist = document.querySelectorAll('.ops');
var result = document.getElementById('result');
for (i = 0; i < opslist.length; i++) {
    opslist[i].addEventListener('click', function () {
        var n1 = parseInt(document.getElementById('n1').value);
        var n2 = parseInt(document.getElementById('n2').value);
        var op = this.innerText;
        result.value = ops[op](n1, n2);
    })
}