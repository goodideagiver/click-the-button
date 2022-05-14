import { formSubmitHandler } from './FormHandler';

const modalTemplateElement = document.querySelector('#modal');

const modalElement = modalTemplateElement.content.cloneNode(true);

export const showModal = () => {
	modalElement
		.querySelector('form')
		.addEventListener('submit', formSubmitHandler);
	document.body.appendChild(modalElement);
};
