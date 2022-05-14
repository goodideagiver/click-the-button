import { showModal } from './Modal';
import { theBestButtonEver } from './DOM-store';
import { youHaveWon } from './youHaveWon';

let userIsValid = false;

theBestButtonEver.addEventListener('click', () => {
	if (!userIsValid) {
		showModal();
		return;
	}

	youHaveWon();
});

export const setUserValid = () => {
	userIsValid = true;
};
