import { resetLocalStorage } from './LocalStorageHandler';
import { hideModal } from './Modal';
import { setUserValid } from './index';

export const formSuccesHandler = () => {
	alert('sukces');
	setUserValid();
	resetLocalStorage();
	hideModal();
};
