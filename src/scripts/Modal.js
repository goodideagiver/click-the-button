const modalTemplateElement = document.querySelector('#modal');

const modalElement = modalTemplateElement.content.cloneNode(true);

export const showModal = () => {
	document.body.appendChild(modalElement);
};
