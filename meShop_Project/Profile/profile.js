
const changePassContainer = document.querySelector('.changePassword');
const changePass = document.querySelector('.changePass');
changePass.addEventListener('click',()=>{
    changePassContainer.classList.remove('hide');
})

const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const saveInfoBtn = document.getElementById('saveInfo-btn');

// Add click event listener to the save button
saveInfoBtn.addEventListener('click', saveInfo);

// Function to save the info
function saveInfo() {
  // Get the values from the input fields
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  firstNameInput.value = '';
  lastNameInput.value = '';
}

console.log(currentUser);

const users = JSON.parse(window.localStorage.getItem('users'));

const oldPassword = document.querySelector('#oldPassword');
const oldPasswordWarning = document.querySelector('#oldPasswordHelp');
const newPassword = document.querySelector('#newPassword');
const newPasswordWarning = document.querySelector('#newPasswordHelp');
const confirmNewPassword = document.querySelector('#confirmNewPassword');
const confirmNewPasswordWarning = document.querySelector('#confirmNewPasswordHelp');
const change = document.querySelector('#change');
const logout = document.querySelector('#logout');

change.addEventListener('click',(e) =>{
    e.preventDefault();
    if(oldPassword.value !== currentUser.password){
        oldPasswordWarning.innerHTML = 'Entered password is not same as Current Password!';
        return false;
    }
    else{
        oldPasswordWarning.innerHTML = '';
    }
    //password validation
    //1 Uppercase
    if(!newPassword.value.match(/[A-Z]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    //lowercase
    if(!newPassword.value.match(/[a-z]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    if(!newPassword.value.match(/[0-9]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    if(!newPassword.value.match(/[!/@/#/$/%/^/&/*/</>/_/]/)){
        newPasswordWarning.innerHTML = 'Password should contain one upper case, one lowercase, one number, and one symbol!';
        notification.innerHTML = '';
        return false;
    }
    if(newPassword.value===currentUser.password){
        newPasswordWarning.innerHTML = 'New password should not be same as your old password!';
        notification.innerHTML = '';
        return false;
    }
    else{
        newPasswordWarning.innerHTML = '';
    }

    if(newPassword.value !== confirmNewPassword.value){
        confirmNewPasswordWarning.innerHTML = "New password and Confirm Password should be the same!";
        notification.innerHTML = '';
        return false;
    }
    else{
        currentUser.password = confirmNewPassword.value;
        oldPassword.value = "";
        newPassword.value = "";
        confirmNewPassword.value = "";
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
        users.map(data=>{
            console.log(data.password)
            if(oldPassword.value === data.password){
                data.password = confirmNewPassword.value;
            }
        })
        window.localStorage.setItem('users', JSON.stringify(users));
    }
    
})
logout.addEventListener('click', ()=>{
    window.localStorage.removeItem('currentUser');
    window.location.href = '../Login/login.html';
})