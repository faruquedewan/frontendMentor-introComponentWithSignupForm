// Inputs
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const eMail = document.getElementById('email');
const pWord = document.getElementById('password');

// Button
const button = document.getElementById('submit');

button.addEventListener("click", function(){
    if(firstName.value == ''){
        firstName.parentElement.classList.add('error');
    } else {
        firstName.parentElement.classList.remove('error');
    };

    if(lastName.value == ''){
        lastName.parentElement.classList.add('error');
    } else {
        lastName.parentElement.classList.remove('error');
    };

    if(eMail.value == ''){
        eMail.parentElement.classList.add('error');
    } else if (!testEmail(eMail.value)){
        eMail.parentElement.querySelector('p').innerText = 'Looks like this is not an email';
    } else {
        eMail.parentElement.classList.remove('error');
    };

    if(pWord.value == ''){
        pWord.parentElement.classList.add('error');
    } else {
        pWord.parentElement.classList.remove('error');
    };
});

function testEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
















// Warnings
// const firstNameWarning = document.querySelectorAll('.p-warning')[0];
// const lastNameWarning = document.querySelectorAll('.p-warning')[1];
// const emailWarning = document.querySelectorAll('.p-warning')[2];
// const passwordWarning = document.querySelectorAll('.p-warning')[3];

// button.addEventListener("click", function(){
//     if (firstName.value == "") {
//         firstNameWarning.classList.remove("hide");
//     } else {
//         firstNameWarning.classList.add("hide");
//     };

//     if (lastName.value == "") {
//         lastNameWarning.classList.remove("hide");
//     } else {
//         lastNameWarning.classList.add("hide");
//     };
    
//     if (email.value == "") {
//         emailWarning.classList.remove("hide");
//     } else {
//         emailWarning.classList.add("hide");
//     };
    
//     if (password.value == "") {
//         passwordWarning.classList.remove("hide");
//     } else {
//         passwordWarning.classList.add("hide");
//     };
// });