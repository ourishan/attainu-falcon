var username = document.getElementsByName('username')[0];
var pswd = document.getElementsByName('inputPassword')[0];
var subt = document.getElementsByTagName("form")[0];
username.addEventListener('input', function (event) {
    if(username.validity.patternMismatch) {
        username.setCustomValidity('Username can only contain alphabets, digits and _. Username cannot start with a digit. ');
    } else {
        username.setCustomValidity('');
    }
});
subt.addEventListener('submit', function (event) {
    event.preventDefault();
    if(username.value.toLowerCase() == "ishan" && pswd.value == "12345678") {
        alert('Login Success!');
    } else {
        alert('Login Failed!');
    }
});