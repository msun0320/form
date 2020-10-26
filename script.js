const button = document.querySelector('button');
const form = document.querySelector('form');
const errorList = document.querySelector('section.error ul');
let errors = [];

const findError = () => {
	const inputs = document.querySelectorAll('input');

	inputs.forEach(element => {
		const labels = Array.from(document.querySelectorAll('label'));
		const label = labels.find(item => item.htmlFor === element.id).textContent;

		if (element.validity.valueMissing) {
			errors.push(`The ${label} field is required.`);
		} else if (element.validity.patternMismatch || element.validity.rangeUnderflow) {
			errors.push(`${label} is not valid.`);
		}
	});
};

const showError = () => {
	findError();

	errors.forEach(element => {
		const errorElement = document.createElement('li');

		errorElement.textContent = element;
		errorList.appendChild(errorElement);
	});
};

button.addEventListener('click', () => {
	errorList.textContent = '';
	errors = [];
	form.classList.add('submitted');
	showError();
});