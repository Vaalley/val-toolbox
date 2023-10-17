/**
 * Generates a random password based on the specified criteria.
 * 
 * @param {number} length - The length of the generated password.
 * @param {boolean} lowerCase - Flag indicating whether to include lowercase characters.
 * @param {boolean} upperCase - Flag indicating whether to include uppercase characters.
 * @param {boolean} numbers - Flag indicating whether to include numbers.
 * @param {boolean} symbols - Flag indicating whether to include symbols.
 * @returns {string} - The generated password.
 */
export function generatePassword(length, lowerCase, upperCase, numbers, symbols) {
	let password = '';

	// Add lowercase characters if the flag is true
	if (lowerCase) {
		password += 'abcdefghijklmnopqrstuvwxyz';
	}

	// Add uppercase characters if the flag is true
	if (upperCase) {
		password += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	// Add numbers if the flag is true
	if (numbers) {
		password += '0123456789';
	}

	// Add symbols if the flag is true
	if (symbols) {
		password += '!@#$%^&*()-_+=';
	}

	// Generate the password by randomly selecting characters from the combined string
	let generatedPassword = '';
	for (let i = 0; i < length; i++) {
		generatedPassword += password.charAt(Math.floor(Math.random() * password.length));
	}

	return generatedPassword;
}