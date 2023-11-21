document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.profile_form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const password2Input = document.getElementById('password2');

    // expresión regular para verificar que sea un email
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    form.addEventListener('submit', function (event) {
        let valid = true;

        // Validación del nombre
        if (nameInput.value.trim() === '') {
            document.getElementById('nameError').textContent = 'Nombre es requerido';
            valid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }

        // Validación del email
        if (emailInput.value.trim() === '') {
            document.getElementById('emailError').textContent = 'Email es requerido';
            valid = false;
        } else if (!regExEmail.test(emailInput.value.trim())) {
            document.getElementById('emailError').textContent = 'Ingresa un email válido';
            valid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }

        // Validación de la contraseña
        if (passwordInput.value.trim() === '') {
            document.getElementById('passwordError').textContent = 'Contraseña es requerida';
            valid = false;
        } else {
            document.getElementById('passwordError').textContent = '';
        }

        // Validación de la repetición de contraseña
        if (password2Input.value.trim() === '') {
            document.getElementById('password2Error').textContent = 'Repetir contraseña';
            valid = false;
        } else if (password2Input.value !== passwordInput.value) {
            document.getElementById('password2Error').textContent = 'Las contraseñas no coinciden';
            valid = false;
        } else {
            document.getElementById('password2Error').textContent = '';
        }

        if (!valid) {
            event.preventDefault(); // Evitar que se envíe el formulario si no es válido
        }
    });
});
