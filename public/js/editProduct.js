document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('editProductForm');
    const submitButton = document.getElementById('submitButton');
    const msg = document.getElementById('editProductError');

    form.addEventListener('input', function (event) {
        const targetElement = event.target;

        // Validar el campo actual
        if (targetElement.value.trim() !== '') {
            targetElement.classList.remove('is-invalid');
        }

        // Habilitar el botón solo si el campo actual tiene un valor
        submitButton.disabled = targetElement.value.trim() === '';
    });

    form.addEventListener('submit', function (event) {
        let error = false;

        // Validar la imagen
        const imageField = form.querySelector('[name="image"]');
        if (!imageField.value.trim()) {
            imageField.classList.add('is-invalid');
            error = true;
        } else {
            imageField.classList.remove('is-invalid');
        }

        const elementsForm = form.elements;
        for (let i = 0; i < elementsForm.length - 1; i++) {
            if (!elementsForm[i].value.trim()) {
                elementsForm[i].classList.add('is-invalid');
                error = true;
            } else {
                elementsForm[i].classList.remove('is-invalid');
            }
        }

        if (error) {
            event.preventDefault();
            msg.innerHTML = "Debes completar todos los campos antes de enviar el formulario.";
        } else {
            msg.innerHTML = "";  
        }
    });
});




