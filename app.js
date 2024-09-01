console.log('Heyyy');

const tarjetaLogin = document.getElementById('cardLogin');
const tarjetaAgredecimiento = document.getElementById('cardThanks');
const formulario = document.getElementById('formulario');
const btnDismiss = document.getElementById('btnDismiss');


/* Funcion que valida el campo del email */
function validateEmail(email) {
    if(!email) return 'El email es requerido';
    const isEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!isEmail.test(email)){
        return 'Ingrese un email valido'
    }
    return '';
}

function handler(e) {
    e.preventDefault();
    
    const formData = new FormData(formulario).entries();
    const { email }= Object.fromEntries(formData);

    const erroMessagEmail = validateEmail(email);
    const elementError = document.getElementById('message_error');
    const elementErrorFiel = document.getElementById('fieldsetInput');
    const emailInput = document.getElementById('email');

    if (erroMessagEmail) {
        elementError.textContent = erroMessagEmail;
        elementErrorFiel.classList.add('error__input');

    }else {
        elementError.textContent = erroMessagEmail;
        tarjetaLogin.classList.add('deactivate');
        tarjetaAgredecimiento.classList.remove('deactivate');
        elementErrorFiel.classList.remove('error__input');
    }
    emailInput.value = "";
} 
formulario.addEventListener('submit', handler);
btnDismiss.addEventListener('click', () => {
    tarjetaAgredecimiento.classList.add('deactivate');
    tarjetaLogin.classList.remove('deactivate');
});