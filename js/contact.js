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

        if (!valid) {
          e.preventDefault();
        }
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
        return reasonRegex.test(reason);
    };

    function isValidMessage(message) {
        const messageRegex = /^[\s\S]{10,}$/;
        return messageRegex.test(message);
    };

  if (typeof ScrollReveal === 'undefined') {
    console.error('ScrollReveal no está cargado.');
    return;
  }

  // Configuración base
  const sr = ScrollReveal({
    reset: false,
    distance: '0px',       // no se desplaza
    duration: 1000,        // tiempo suave
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)', // ease más natural
    scale: 0.9,            // aparece con zoom-in sutil
    rotate: { x: 6, y: -6, z: 0 }, // giro 3D sutil
    opacity: 0,
    mobile: true,
    viewFactor: 0.1
  });

  // ✅ Logo Header (siempre visible, solo animación 3D sin ocultarse)
  sr.reveal('.header .logo svg', {
    opacity: 1,  // 👈 siempre visible
    scale: 0.95,
    rotate: { x: 4, y: -4, z: 0 },
    delay: 80
  });

  // ✅ Nav del Header
  sr.reveal('header nav ul li', {
    interval: 0,
    delay: 80
  });

  // ✅ Fondo (video)
  sr.reveal('.background-video', {
    scale: 1.02,
    opacity: 0.8,
    duration: 1200
  });

  // ✅ Contenido principal
  sr.reveal('.main', {
    delay: 100
  });

  // ✅ Logo Footer (siempre visible igual que el del header)
  sr.reveal('footer .description-footer .logo svg', {
    opacity: 1, // 👈 no se oculta
    scale: 0.95,
    rotate: { x: -4, y: 4, z: 0 },
    delay: 120
  });

  // ✅ Resto del footer
  sr.reveal(`
    footer .description-footer .social-link,
    footer .copy p,
    footer .copy .container-links a
  `, {
    delay: 120,
    interval: 0
  });

});
