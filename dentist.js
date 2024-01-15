"use strict";

const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .navbar');
const body = document.body;

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}








var swiper = new Swiper(".team-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});




// Name
const text = document.querySelector('.welcome');

function getName() {
    setTimeout(() => {
        const infor = prompt("What's your name??").toUpperCase();
        if (typeof infor === 'string' && isNaN(infor)) {
            text.innerHTML = `Welcome ${infor}..`;
            text.style.color = 'green';
        } else {
            alert('Enter your name: ');
        }
    }, 2000);
}

getName();





// button
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    const input = prompt("How old are you: ");
    if (input >= 18) {
        button.style.backgroundColor = 'green';
        button.innerHTML = 'Good to go :)';
    } else {
        button.innerHTML = 'Over 18 only';
        button.style.backgroundColor = 'red';
    }
})

window.onscroll = () => {
    button.style.backgroundColor = 'blue';
    button.innerHTML = 'Make Appointment';

    button.onclick = () => {
        alert("You alredy clicked");
    }
}







// appointment form 
const form = document.getElementById("appointment-form");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const phone = form.elements.phone.value;
    const appointmentDate = form.elements.appointmentDate.value;

    // Perform a server request to reserve the appointment
    // ...

    message.textContent = "Appointment reserved successfully!"
});