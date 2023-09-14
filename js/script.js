const mode = document.querySelector('#mode-icon');
const form = document.getElementById('login-form');
mode.addEventListener('click', ()=>{

    if(mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');

        form.classList.add('dark');
        form.classList.remove('dark');
        return;
    }
    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
});