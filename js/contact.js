'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const reason = document.getElementById('reason');
    const message = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const reasonError = document.getElementById('reasonError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        if (!name.value.trim()) {
            nameError.textContent = 'This field is required';
            errorInputs();
        } else if(!isValidName(name.value.trim())) {
            nameError.textContent = 'Invalid name';;
            isValid = false;
        } else { 
            nameError.textContent = '';;
        };

        if (!email.value.trim()) {
            emailError.textContent = 'This fiel is required';
            errorInputs();
        } else if(!isValidEmail(email.value.trim())) {
            emailError.textContent = 'Invalid email';
            isValid = false;
        } else {
            emailError.textContent = ''
        };

        if (!reason.value.trim()) {
            reasonError.textContent = 'This field is required';
            errorInputs();
        } else if(!isValidReason.value.trim()) {
            reasonError.textContent = 'Invalid reason';
            errorInputs();
        } else {
            reasonError.textContent = '';
        };

        if (!message.value.trim()) {
            messageError.textContent = 'This field is required';
            errorInputs();
        } else if(!isValidMessage.value.trim()) {
            messageError.textContent = 'Invalid message';
            errorInputs();
        } else {
            messageError.textContent = '';
        };
    });

    const errorInputs = () => {
        name.style.border = '1px solid red';
        email.style.border = '1px solid red';
        reason.style.border = '1px solid red';    
        message.style.border = '1px solid red';
    };

    const resetErrors = () => {
        name.style.border = ''; 
        nameError.textContent = '';
        email.style.border = ''; 
        emailError.textContent = ''; 
        reason.style.border = ''; 
        reasonError.textContent = ''; 
        message.style.border = ''; 
        messageError.textContent = ''; 
    };

    name.addEventListener('change', resetErrors);
    email.addEventListener('change', resetErrors);
    reason.addEventListener('change', resetErrors);
    message.addEventListener('change', resetErrors);

    function isValidName(name) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(name);
    };

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    function isValidReason(reason) {
        const reasonRegex = /^[\s\S]{10,}$/;
        return reasonRegex.test(msg);
    };

    function isValidMessage(message) {
        const messageRegex = /^[\s\S]{10,}$/;
        return messageRegex.test(msg);
    };

});
