const arrowsSelect = document.querySelectorAll('.select__icon');

arrowsSelect.forEach((arrow) => {
    arrow.addEventListener('click', () => {
        const parentStep = arrow.closest('.step');
        const currentCheckboxes = parentStep.querySelector('.step__chekboxes');
        currentCheckboxes.classList.toggle('hidden');
        arrow.classList.toggle('select__icon_clicked');
    });
});
