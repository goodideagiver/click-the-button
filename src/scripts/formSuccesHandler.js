import { resetLocalStorage } from './localStorageHandler';
import { hideModal } from './modal';
import { setUserValid } from './index';
import showAlert from './showAlert';
import { getTriesCount } from './getTriesCount';
import { handleTriesNumeralEndChar } from './handleTriesNumeralEndChar';

export const formSuccesHandler = () => {
	showSuccessAlert();
	setUserValid();
	resetLocalStorage();
	hideModal();
};

const showSuccessAlert = () => {
	const tries = getTriesCount();
	showAlert(
		`You have succesfully logged in! You did it in ${tries} ${handleTriesNumeralEndChar(
			tries
		)}!`
	);
};
