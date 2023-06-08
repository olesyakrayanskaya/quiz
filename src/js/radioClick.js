import { steps, slideRight } from './changeSteps';
import request from './request';
import removeBtnAtrDisabled from './checkboxClick';

function getCheckedValuesRadio(radio, question) {
    const checkedRadioInput = radio.closest('.step')
        .querySelector('.step__input:checked');
    const radioInputCheckedValue = checkedRadioInput
        .labels[0]
        .innerHTML;
    request.set(question, radioInputCheckedValue);
}

document.querySelectorAll('.step__input').forEach((radio) => {
    const question = radio.closest('.step')
        .querySelector('.step__question')
        .innerHTML;
    radio.addEventListener('click', () => {
        removeBtnAtrDisabled(radio);
        getCheckedValuesRadio(radio, question);
        setTimeout(slideRight, 100, steps);
    });
});
