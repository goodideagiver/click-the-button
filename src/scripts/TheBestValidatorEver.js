const errorChadThrower = (error) => {
	throw new Error(error);
};

const validatePassword = (password) => {
	if (password.length < 8) {
		errorChadThrower('Password must be at least 8 characters long');
	}
	if (password.length > 20) {
		errorChadThrower('Password must be less than 20 characters long');
	}
	if (password.search(/[a-z]/) === -1) {
		errorChadThrower('Password must contain at least one lowercase letter');
	}
	if (password.search(/[A-Z]/) === -1) {
		errorChadThrower('Password must contain at least one uppercase letter');
	}
	if (password.search(/[0-9]/) === -1) {
		errorChadThrower('Password must contain at least one number');
	}
	if (password.search(/[^a-zA-Z0-9]/) === -1) {
		errorChadThrower(
			'Password must contain at least one special character'
		);
	}
	if (password.search('~') === -1) {
		errorChadThrower('Password must contain the tilde character');
	}
	if (password.search('€') === -1) {
		errorChadThrower('Password must contain at least one euro sign. Tip: alt code 0128');
	}
	if (Math.random() < 0.1) {
		errorChadThrower(
			'This is a random password error and it had 10% chance of happening'
		);
	}
	if (password.search(' ') === -1) {
		errorChadThrower('Password must contain at least one space');
	}
	if (password.search('2137') === -1) {
		errorChadThrower('Password must contain the number 2137');
	}
};
