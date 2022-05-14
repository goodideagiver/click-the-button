import { resetLocalStorage } from './localStorageHandler';
import { hideModal } from './modal';
import { setUserValid } from './index';
import showAlert from './showAlert';

export const formSuccesHandler = () => {
	showAlert('You have successfully logged in!');
	setUserValid();
	resetLocalStorage();
	hideModal();
};
