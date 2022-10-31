let tab_buttons = document.querySelectorAll('.tab_button');
let tabs = document.querySelectorAll('.tab');

for(let i = 0; i < tab_buttons.length; i++) {
    tab_buttons[i].addEventListener('click', () => {
        document.querySelector('.tab_button.active').classList.remove('active');
        document.querySelector('.tab.active').classList.remove('active');

        tab_buttons[i].classList.add('active');
        tabs[i].classList.add('active');
    })
}