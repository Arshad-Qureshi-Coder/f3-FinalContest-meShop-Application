const home = document.querySelector('.home');
const loginNav = document.querySelector('.login');
const signupNav = document.querySelector('.signup');

home.addEventListener("click", () => {
    if (localStorage.getItem('currentUser')) {
        window.location.href = '../Shop/shop.html';
    }
    else {
        window.location.href = '../index.html';
    }
})

loginNav.addEventListener("click", () => {
    window.location.href = "./login.html"
})

signupNav.addEventListener("click", () => {
    window.location.href = "../Signup/signup.html";
})


const email = document.querySelector('#email');
const password = document.querySelector('#password');
const loginSubmit = document.querySelector('.login-btn');

// at this page local storage must contain a users key
const users = JSON.parse(localStorage.getItem('users'));

// filter out the logged in details from users array and store that user in current user object;
const currentUser = {};

loginSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // if 
    if (!users) {
        alert('You have not sign up yet. Please Sign Up first.');
        window.location.href = '../Signup/signup.html'
        return;
    }

    let invalidCredentials = true;
    users.map(data => {
        if (data.email === email.value && data.password === password.value) {
            invalidCredentials = false;
            currentUser.email = data.email;
            currentUser.name = data.name;
            currentUser.password = data.password;
        }
        if (invalidCredentials) {
            alert("Invalid email or password!!!");
            return false;
        }
        else {
            currentUser.token = `${Math.random().toString(26).slice(2)}${Math.random().toString(26).slice(2, 6)}`;
            window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
            alert('Logged in successfully!!!')
            window.location.href = '../Shop/shop.html';
        }
    });
})

// if user is already logged in redirect him to landing page
if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../Shop/shop.html';
}