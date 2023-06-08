import request from './request';
import fetch from './fetchMock';

const feedbackInputs = Array.from(document.getElementsByName('feedback'));
const contactSendBtn = document.querySelector('.contact-send');
const finishScreen = document.querySelector('.finish');
const quizWindow = document.querySelector('.quiz-window');
const quizWindowInfo = document.querySelector('.quiz-window__info');

contactSendBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let valid = true;
    feedbackInputs.forEach((field) => {
        field.checkValidity();
        valid = valid && field.reportValidity();
    });
    if (!valid) return;

    feedbackInputs.forEach((field) => {
        request.set(field.id, field.value);
    });

    fetch('/url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: Object.fromEntries(request),
    }).then(() => {
        contactSendBtn.closest('.step').classList.add('hidden');
        finishScreen.classList.remove('hidden');
        quizWindowInfo.classList.add('hidden');
        quizWindow.style.maxWidth = '40rem';
    });
});
