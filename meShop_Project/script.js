const homeNavbar = document.querySelector('.home');
const loginNavbar = document.querySelector('.login');
const singupNavbar = document.querySelector('.signup');
const login = document.querySelector('#login-btn');
const signup = document.querySelector('#signup-btn');

homeNavbar.addEventListener('click',() => {
    alert('Please Login First!!');
})

login.addEventListener('click', () => {
    window.location.href = './login/index.html';
})

signup.addEventListener('click', () => {
    window.location.href = './Signup/index.html';
})


if (window.localStorage.getItem('currentUser')) {
    window.location.href = ''
}

