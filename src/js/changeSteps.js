const arrLeft = document.querySelectorAll('.step__btn_left');
const arrRight = document.querySelectorAll('.step__btn_right');
export const steps = document.querySelectorAll('.step');

let stepNumber = 0;

export function slideRight(arrSteps) {
    stepNumber += 1;
    arrSteps[stepNumber].classList.remove('hidden');
    arrSteps[stepNumber].classList.add('step_animated');
    arrSteps[stepNumber - 1].classList.add('hidden');
    arrSteps[stepNumber - 1].classList.remove('step_animated');
}

function slideLeft(arrSteps) {
    arrSteps[stepNumber - 1].classList.remove('hidden');
    arrSteps[stepNumber - 1].classList.add('step_animated');
    arrSteps[stepNumber].classList.add('hidden');
    arrSteps[stepNumber].classList.remove('step_animated');
    stepNumber -= 1;
}

arrRight.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        slideRight(steps);
    });
});

arrLeft.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        slideLeft(steps);
    });
});
