function validate() {
    var value = document.getElementById('accountType');
    var strUser = value.options[value.selectedIndex].text;

    if (strUser == 'Citizen') {
        window.location.href = "../html/citizen.html";
    }
    else {
        window.location.href = "../html/admin.html";

    }
}

function signupCompleted() {
    window.location.href = "../html/signupCompleted.html"
}

function passwordIdentical() {
    var psw = document.getElementById('psw');
    var pswConfirm = document.getElementById('pswConfirm');

    if (pswConfirm.value != psw.value) {
        document.getElementById('wrong_pass_alert').style.color = 'red';
        document.getElementById('wrong_pass_alert').innerHTML = '✗ Passwords do not match';
        document.getElementById('registerButton').disabled = true;
        document.getElementById('registerButton').style.opacity = (0.4);
    }
    else {
        document.getElementById('wrong_pass_alert').style.color = 'green';
        document.getElementById('wrong_pass_alert').innerHTML = '✓ Password Matched';
        document.getElementById('registerButton').disabled = false;
        document.getElementById('registerButton').style.opacity = (1);

    }

}