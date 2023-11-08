/*
    Author: @a_devs_life
    Youtube: https://www.youtube.com/@a_devs_life
    Instagram: https://www.instagram.com/a_devs_life/
    Github: https://github.com/codeboysk/a-devs-life
*/

const signupBtn = document.getElementById('signup');
const loginBtn = document.getElementById('login');

const signupContainer = document.querySelector('.signup-container');
const loginContainer = document.querySelector('.login-container');

loginBtn.addEventListener('click', () => {
    signupContainer.classList.add('slide-up');
    loginContainer.classList.remove('slide-up');
});

signupBtn.addEventListener('click', () => {
    loginContainer.classList.add('slide-up');
    signupContainer.classList.remove('slide-up');
});