// REQUIRED
export const requiredValidateRule = [
    value => !!value || 'Required.',
];

// EMAIL
var validateRegexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const emailValidateRule = [
    value => !!value || 'Required.',
    value => validateRegexEmail.test(value) || 'This field must be a valid email',
];

// PASSWORD
export const passwordValidateRule = [
    value => !!value || 'Required.',
    value => (value && value.length >= 8) || 'Min 8 characters',
]
