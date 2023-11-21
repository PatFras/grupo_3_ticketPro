document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('searchForm');
    const keywordsInput = document.getElementById('busqueda');
    const errorContainer = document.getElementById('searchError');

    form.addEventListener('submit', function (event) {
        const keywords = keywordsInput.value.trim();

        // Limpiar mensajes de error anteriores
        errorContainer.textContent = ''; 

        if (keywords === '') {
            event.preventDefault();
            displayError('Búsqueda vacía');
        }

        if (keywords.length > 20) {
            event.preventDefault();
            displayError('El campo de búsqueda no puede tener más de 20 caracteres.');
        }
    });

    function displayError(message) {
        errorContainer.textContent = message;
    }

    // Limpiar el mensaje de error cuando se cambia el contenido del campo de búsqueda
    keywordsInput.addEventListener('input', function () {
        errorContainer.textContent = '';
    });
});


