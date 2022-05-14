import { congratulationsElement } from './DOM-store';

export const youHaveWon = () => {
	congratulationsElement.classList.remove('disabled');
};
