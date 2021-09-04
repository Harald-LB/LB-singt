"use strict";
/**
 *
 */
var myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'), { keyboard: false });
var okButton = document.querySelector('#password-ok-button');
var passwordField = document.querySelector('#password-field');
window.onload = function () {
    // check access authorisation
    var accessAuthorized = !!localStorage.accessAuthorized;
    if (accessAuthorized) {
        myModal.hide();
    }
    else {
        myModal.show();
        passwordField.focus();
    }
};
function checkPassword() {
    if (passwordField.value.toLowerCase() == "kslidz") {
        // Password is OK
        myModal.hide();
        // save access authorisation
        localStorage.accessAuthorized = true;
    }
    else {
        passwordField.classList.add("is-invalid");
    }
}
okButton.onclick = function () {
    checkPassword();
};
passwordField.onchange = function () {
    checkPassword();
};
//# sourceMappingURL=login.js.map