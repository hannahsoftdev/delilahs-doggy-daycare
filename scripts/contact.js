// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
// contact.js

const form = document.querySelector('form');
const contactPage = document.getElementById('contact-page');

function handleSubmit(event) {

    event.preventDefault();

    const thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message';
    thankYouMessage.style.fontSize = '24px';

    contactPage.innerHTML = '';

    contactPage.appendChild(thankYouMessage);
}

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

form.addEventListener('submit', handleSubmit);