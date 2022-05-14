import { nameValidator, validatePassword } from './theBestValidatorEver';
import { triesCounterHandler } from './triesCounterHandler';
import { formSuccesHandler } from './formSuccesHandler';
import showAlert from './showAlert';

export const formSubmitHandler = (event) => {
	event.preventDefault();
	const form = event.target;
	const data = new FormData(form);
	const name = data.get('name');
	const password = data.get('password');

	triesCounterHandler();

	try {
		nameValidator(name);
		validatePassword(password);
		formSuccesHandler();
	} catch (error) {
		form.reset();
		showAlert(error.message);
	}
};