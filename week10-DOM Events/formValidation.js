const userName = document.getElementById("userName");
const userNameWrong = document.getElementById("userNameWrong");

const userNameValidation = () => {
    const regex = /[0-9a-zA-Z]+/;
    if (userName.value) {
        if (userName.value.length >= 4) {
            let userRegex = userName.value.match(regex);
            if (userRegex && userRegex[0] === userName.value) {
                userName.innerHTML = "Good username";
                userName.style.borderColor = "green";
                userNameWrong.className = "goodInput";
            } else {
                userNameWrong.innerHTML = "Username should be letters and numbers only.";
                userNameWrong.className = "badInput";
            }
        } else {
            userNameWrong.innerHTML = "Username should be at least 4 characters";
            userNameWrong.className = "badInput";
        }
    } else {
        userNameWrong.innerHTML = "Please enter a username.";
        userNameWrong.className = "badInput";
    }
}

userName.addEventListener("blur", userNameValidation);


const emailAddress = document.getElementById("emailAddress");
const emailWrong = document.getElementById("emailWrong");

const emailValidation = () => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailAddress.value) {
        let emailRegex = emailAddress.value.match(regex);
        if (emailRegex && emailRegex[0] === emailAddress.value) {
            emailAddress.style.borderColor = "green";
            emailWrong.className = "goodInput";
        } else {
            emailWrong.innerHTML = "Please enter a valid email address.";
            emailWrong.className = "badInput";
        }
    } else {
        emailWrong.innerHTML = "Please enter a valid email address.";
        emailWrong.className = "badInput";
    }
}

emailAddress.addEventListener("blur", emailValidation);


const firstName = document.getElementById("firstName");
const firstNameWrong = document.getElementById("firstNameWrong");

const firstNameValidation = () => {
    const regex = /[a-zA-Z]*/;
    if (firstName.value) {
        let firstNameRegex = firstName.value.match(regex);
        if (firstNameRegex && firstNameRegex[0] === firstName.value) {
            firstName.style.borderColor = "green";
            firstNameWrong.className = "goodInput";
        } else {
            firstNameWrong.innerHTML = "Please enter a valid First Name only letters.";
            firstNameWrong.className = "badInput";
        }
    } else {
        firstNameWrong.innerHTML = "Please enter a First Name.";
        firstNameWrong.className = "badInput";
    }
}

firstName.addEventListener("blur", firstNameValidation);


const lastName = document.getElementById("lastName");
const lastNameWrong = document.getElementById("lastNameWrong");

const lastNameValidation = () => {
    const regex = /[a-zA-Z]*/;
    if (lastName.value) {
        let lastNameRegex = lastName.value.match(regex);
        if (lastNameRegex && lastNameRegex[0] === lastName.value) {
            lastName.style.borderColor = "green";
            lastNameWrong.className = "goodInput";
        } else {
            lastNameWrong.innerHTML = "Please enter a valid Last Name only letters.";
            lastNameWrong.className = "badInput";
        }
    } else {
        lastNameWrong.innerHTML = "Please enter a Last Name.";
        lastNameWrong.className = "badInput";
    }
}

lastName.addEventListener("blur", lastNameValidation);


const phoneNumber = document.getElementById("phone");
const phoneNumberWrong = document.getElementById("phoneNumberWrong");

const phoneNumberValidation = () => {
    const regex = /[0-9]*/;
    if (phoneNumber.value) {
        if (phoneNumber.value.length >= 10) {
            let phoneNumberRegex = phoneNumber.value.match(regex);
            if (phoneNumberRegex && phoneNumberRegex[0] === phoneNumber.value) {
                phoneNumber.style.borderColor = "green";
                phoneNumber.className = "goodInput";
            } else {
                phoneNumberWrong.innerHTML = "Please enter a valid Phone number.";
                phoneNumberWrong.className = "badInput";
            }
        } else {
            phoneNumberWrong.innerHTML = "Phone number must be at least 10 characters.";
            phoneNumberWrong.className = "badInput";
        }
    } else {
        phoneNumberWrong.innerHTML = "Please enter a Phone.";
        phoneNumberWrong.className = "badInput";
    }
}

phoneNumber.addEventListener("blur", phoneNumberValidation);