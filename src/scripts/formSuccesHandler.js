import { resetLocalStorage } from './LocalStorageHandler';
import { hideModal } from './Modal';
import { setUserValid } from './index';
import showAlert from './showAlert';

export const formSuccesHandler = () => {
	showAlert('You have successfully logged in!');
	setUserValid();
	resetLocalStorage();
	hideModal();
};
