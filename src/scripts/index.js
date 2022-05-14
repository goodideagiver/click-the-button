import { showModal } from './Modal';
import { theBestButtonEver } from './DOM-store';

let userIsValid = false;

theBestButtonEver.addEventListener('click', () => {
	if (!userIsValid) {
		showModal();
	}
});

export const setUserValid = () => {
	userIsValid = true;
};
