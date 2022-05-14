import { localStorageHandler } from './localStorageHandler';

export const triesCounterHandler = () => {
	const tries = localStorageHandler();

	const counterElement = document.querySelector('.hidden');
	const triesElement = document.getElementById('tries');
	if (tries >= 0) {
		if (counterElement && counterElement.classList.contains('hidden')) {
			counterElement.classList.remove('hidden');
		}
		triesElement.innerText = tries;
	}
};
