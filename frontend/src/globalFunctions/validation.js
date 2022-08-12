/* eslint-disable */
class Validation {

    stringValidation = (str, length) => {
        return str.trim().length >= length
    }

    emailValidation = (email) => {
        const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return filter.test(email)
    }

    passwordValidation = (password, length) => {
        return password.trim().length > length
    }
}

const validator = new Validation()


export default validator
