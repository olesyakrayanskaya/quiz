import request from './request';

function getCheckedValues(checkbox, question) {
    const checkboxesCheckedValues = Array.from(document.getElementsByName(checkbox.name))
        .filter((c) => c.checked)
        .map((c) => c.labels[0].innerHTML);
    const selectedValuesField = checkbox.closest('.step__main')
        .querySelector('.select__selected-values');
    selectedValuesField.innerHTML = checkboxesCheckedValues.join(', ');
    request.set(question, checkboxesCheckedValues);
}

function removeBtnAtrDisabled(checkbox) {
    const parentStep = checkbox.closest('.step');
    const currentRightBtn = parentStep.querySelector('.step__btn_right');
    currentRightBtn.removeAttribute('disabled');
}

document.querySelectorAll('.step__checkbox').forEach((checkbox) => {
    const question = checkbox.closest('.step')
        .querySelector('.step__question')
        .innerHTML;
    checkbox.addEventListener('click', () => {
        removeBtnAtrDisabled(checkbox);
        getCheckedValues(checkbox, question);
    });
});

export default removeBtnAtrDisabled;
