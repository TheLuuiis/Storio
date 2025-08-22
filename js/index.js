'use strict'
// <    >  =>

window.addEventListener('DOMContentLoaded', () => {

    /* Configuración base */
    window.sr = ScrollReveal({
        reset: true,  
        distance: "60px",
        duration: 1200,
        easing: "ease-in-out",
        opacity: 0
    });

    /* ==============================
       Animaciones 1 - HEADER + START ⭐
    ===============================*/
    sr.reveal('.logo', {
        origin: "top",
        rotate: { x: 20, y: 0, z: -10 },
        delay: 200
    });

    sr.reveal('nav ul li', {
        origin: "left",
        interval: 150, 
        rotate: { x: 0, y: 20, z: 0 }
    });

    sr.reveal('.container-title h1', {
        origin: "bottom",
        distance: "80px",
        delay: 300,
        interval: 200,
        rotate: { x: 0, y: -25, z: 0 },
        scale: 0.9
    });

    sr.reveal('.text-start p', {
        origin: "right",
        delay: 600,
        distance: "70px",
        rotate: { x: 10, y: 15, z: 0 }
    });


    /* ==============================
       Animaciones 2 - BRANDS + LIFE ⭐
    ===============================*/
    sr.reveal('.title-brands h1', {
        origin: "top",
        distance: "80px",
        duration: 1200,
        delay: 200,
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        opacity: 0,
        scale: 0.9
    });

    sr.reveal('.container-meet img', {
        origin: "bottom",
        distance: "100px",
        duration: 1000,
        interval: 150,   
        rotate: { x: 20, y: -15, z: 0 },
        scale: 0.85,
        opacity: 0,
        easing: "ease-out"
    });

    sr.reveal('.brands a', {
        origin: "right",
        distance: "120px",
        duration: 1000,
        delay: 400,
        rotate: { x: 0, y: 20, z: 0 },
        scale: 0.95,
        opacity: 0,
        easing: "ease-in-out"
    });

    sr.reveal('.title-life h2', {
        origin: "left",
        distance: "80px",
        duration: 1200,
        interval: 200,
        rotate: { x: 0, y: -25, z: 0 },
        scale: 0.9,
        opacity: 0,
        easing: "ease-in-out"
    });

    sr.reveal('.container-text-life p', {
        origin: "bottom",
        distance: "70px",
        duration: 1000,
        interval: 200,
        rotate: { x: 10, y: 10, z: 0 },
        opacity: 0,
        easing: "ease-out"
    });


    /* ==============================
       Animaciones 3D Avanzadas - STATE ⭐
    ===============================*/
    sr.reveal('.title-state h2', {
        interval: 200,
        origin: "bottom",
        rotate: { x: 40, y: -20, z: 0 },
        scale: 0.9,
    });

    sr.reveal('.text-state p', {
        interval: 300,
        origin: "right",
        rotate: { x: 0, y: 35, z: 0 },
        scale: 0.85,
    });


    /* ==============================
       SUSTAINABILITY ⭐
    ===============================*/
    sr.reveal('.title-tecnology h2', {
        origin: "left",
        rotate: { x: 0, y: -45, z: 0 },
        scale: 0.8,
    });

    sr.reveal('.text-tecnology p', {
        origin: "bottom",
        delay: 300,
        distance: "100px",
        rotate: { x: 25, y: 0, z: 0 },
        scale: 0.9,
    });


    /* ==============================
       MAKE YOUR MARK ⭐
    ===============================*/
    sr.reveal('.title-make h2:nth-child(1)', {
        origin: "top",
        rotate: { x: 0, y: -50, z: 0 },
        scale: 0.85,
    });

    sr.reveal('.title-make h2.left', {
        origin: "bottom",
        delay: 200,
        rotate: { x: 0, y: 50, z: 0 },
        scale: 0.85,
    });

    sr.reveal('.container-text-make p', {
        origin: "right",
        delay: 400,
        rotate: { x: 30, y: -20, z: 0 },
        scale: 0.8,
    });


    /* ==============================
       PICTURE ⭐
    ===============================*/
    sr.reveal('.container-picture h2', {
        origin: "left",
        rotate: { x: -30, y: 0, z: 0 },
        scale: 0.85,
    });

    sr.reveal('.container-picture p', {
        origin: "right",
        delay: 200,
        rotate: { x: 30, y: 0, z: 0 },
        scale: 0.85,
    });

    sr.reveal('.container-picture a', {
        origin: "bottom",
        delay: 400,
        distance: "120px",
        rotate: { x: 0, y: 0, z: 180 },
        scale: 0.7,
    });

    sr.reveal('footer .logo', {
        origin: "top",
        distance: "60px",
        delay: 200,
        rotate: { x: 0, y: 180, z: 0 },
        scale: 0.85,
    });

    sr.reveal('footer .copy p', {
        origin: "bottom",
        delay: 400,
        rotate: { x: 25, y: 0, z: 0 },
        scale: 0.85,
    });

    sr.reveal('footer .container-links a', {
        interval: 150,
        origin: "bottom",
        rotate: { x: -25, y: 15, z: 0 },
        scale: 0.85,
    });

});
