const userName = document.getElementById("name");

const myUserNameValidation = () => {
    // var regex = /^[0-9a-zA-Z ]+$/;
    var regex = /[0-9a-zA-Z]+/;
    console.log(userName.value.match(regex));
    const textField = document.getElementById("textField");
    if (userName.value) {
        if (userName.value.length >= 4) {
            let userRegex = userName.value.match(regex);
            if (userRegex && userRegex[0] === userName.value) {
                textField.innerHTML = "Good input";
                textField.style.borderColor = "green";
            } else {
                textField.innerHTML = "invalid input : only numbers , letters and white space";
                textField.style.color = "red";
            }
        } else {
            textField.innerHTML = "username should be >= 4 characters ";
            textField.style.color = "red";
        }
    } else {
        textField.innerHTML = "empty input";
        textField.style.color = "red";
    }

}

userName.addEventListener("blur", myUserNameValidation);


const password = document.getElementById("pass");
const myPasswordValidation = () => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}/;
    const passwordField = document.getElementById("passwordField");
    if (password.value) {
        if (password.value.length >= 3) {
            let passwordRegex = password.value.match(regex);
            if (passwordRegex && passwordRegex[0] === password.value) {
                passwordField.innerHTML = "Good input";
                passwordField.style.color = "green";
            } else {
                passwordField.innerHTML = "Invalid input: you should have at least one uppercase,one lowercase and one digit";
                passwordField.style.color = "red";
            }
        } else {
            passwordField.innerHTML = "Password should be at >= 3";
            passwordField.style.color = "red";
        }
    } else {
        passwordField.innerHTML = "empty input";
        passwordField.style.color = "red";
    }

}

password.addEventListener("blur", myPasswordValidation);

const checkPassword = () => {
    const password1 = document.getElementById("pass");
    const password2 = document.getElementById("confirmPassword");
    const message = document.getElementById("message");
    if (password1.value.length >= 3) {
        message.style.color = "green";
        message.innerHTML = "character number ok!";
    } else {
        message.style.color = "red";
        message.innerHTML = "you have to enter at least 3 digits!";
    }
    if (password1.value === password2.value) {
        message.style.color = "green";
        message.innerHTML = "Passwords match";
    } else {
        message.style.color = "red";
        message.innerHTML = "These passwords don't match!";
    }
}
confirmPassword.addEventListener("keyup", checkPassword);

