const home = document.querySelector('.home');
const login = document.querySelector('.login');
const signup = document.querySelector('.signup');

const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const signupButton = document.querySelector('.signup-btn');


let users = [];
// if local storage contains 'users' key then assign the value of that key to 'users' variable else assign an empty array to 'users' variable. this ensures that every time the users array will get update with addition of new user
localStorage.getItem('users') ? users = JSON.parse(localStorage.getItem('users')) : [];

signupButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Name Validation
    const fname = firstName.value.trim();
    if (fname.length === 0) {
        alert('Please enter valid name!!!');
        return false;
    }
    const lname = firstName.value.trim();
    if (lname.length === 0) {
        alert('Please enter valid name!!!');
        return false;
    }

    ///Email Validation
    if (email.value.indexOf('@') < 2) {
        alert("Please enter valid email address!!!");
        return false;
    }
    else if (email.value.lastIndexOf('.') !== email.value.length - 4 && email.value.lastIndexOf('.') !== email.value.length - 3) {
        alert("Please enter valid email address!!!");
        return false;
    }

    let sameEmail = false;
    let userArr = []
    if (localStorage.getItem('users')) {
        userArr = JSON.parse(localStorage.getItem('users'))
        if (userArr.filter(user => user.email == email.value).length != 0) {
            alert('Email already exists!!! ');
            return false;
        }
    }

    //Password Validation
    if (password.value.trim().length < 4) {
        alert('Password must contains at least 4 characters!!!');
        return false;
    }

    //Confirm password validation
    if (password.value.trim() !== confirmPassword.value.trim()) {
        alert("Password and Confirm Password should be same!!!");
    }
    if (!checkbox.checked) {
        alert('Please accept the terms and conditions to continue!!!');
    }
    else {  // all input data is correct and email is also not exist in system and user checked the checkbox then just add user to local storage
        const userData = {
            name: fullName.value.trim(),
            email: email.value.trim(),
            password: password.value.trim(),
        }
        users.push(userData);  // Update Users array which contains all the users who sign up till date
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = "../Login/login.html";  // redirect user to login page
        alert('Signed up successfully!!! Please login to continue!!!');
    }
})

// if user is not logged out then redirect the last logged in user to landing page
if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../Shop/shop.html';
}