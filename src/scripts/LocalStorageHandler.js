export const localStorageHandler = () => {
	const tries = localStorage.getItem('tries');
	if (tries === null) {
		localStorage.setItem('tries', 1);
		return 1;
	} else {
		const newTries = parseInt(tries) + 1;
		localStorage.setItem('tries', newTries);
		return newTries;
	}
};

export const resetLocalStorage = () => {
	localStorage.setItem('tries', '0');
};
