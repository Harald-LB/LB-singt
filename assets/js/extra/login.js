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
    }
};
okButton.onclick = function () {
    // check password
    if (passwordField.value == "kslidz") {
        myModal.hide();
        // save access authorisation
        localStorage.accessAuthorized = true;
    }
    else {
        passwordField.classList.add("is-invalid");
    }
};
//# sourceMappingURL=login.js.map