const tries = localStorage.getItem('tries');

export const localStorageHandler = () => {
	const tries = localStorage.getItem('tries');
	if (tries === null) {
		localStorage.setItem('tries', 0);
	} else {
		localStorage.setItem('tries', parseInt(tries) + 1);
	}
};
