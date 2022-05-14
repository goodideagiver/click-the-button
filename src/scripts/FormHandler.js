import { nameValidator, validatePassword } from './TheBestValidatorEver';

export const formSubmitHandler = (event) => {
	event.preventDefault();
	const form = event.target;
	const data = new FormData(form);
	const name = data.get('name');
	const password = data.get('password');

	try {
		nameValidator(name);
		validatePassword(password);
	} catch (error) {
		form.reset();
		alert(error.message);
	}
};
