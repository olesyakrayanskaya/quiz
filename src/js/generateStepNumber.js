import { steps } from './changeSteps';

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < steps.length; i++) {
        const stepNumber = steps[i].querySelector('.step__number');
        stepNumber.innerHTML = `Шаг ${i + 1}/${steps.length}`;
    }
});
