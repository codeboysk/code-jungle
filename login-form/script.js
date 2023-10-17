/*
    Author: @a_devs_life
    Youtube: https://www.youtube.com/@a_devs_life
    Instagram: https://www.instagram.com/a_devs_life/
    Github: https://github.com/codeboysk/a-devs-life
*/

let pass_field = document.querySelector('.pass-key');
let show_btn = document.querySelector('.show');

show_btn.addEventListener('click', function () {
    if(pass_field.type === 'password'){
        pass_field.type = 'text';
        show_btn.innerHTML = "<em class='bx bx-hide' ></em>";
    } else {
        pass_field.type = 'password';
        show_btn.innerHTML = "<em class='bx bx-show-alt' ></em>";
    }
});