document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("searchForm");
  const keywordsInput = document.getElementById("busqueda");
  const errorContainer = document.getElementById("searchError");

  form.addEventListener("submit", function (event) {
    const keywords = keywordsInput.value.trim();

    errorContainer.textContent = "";

    if (keywords === "") {
      event.preventDefault();
      displayError("Ingresa una búsqueda");
    }

    if (keywords.length > 20) {
      event.preventDefault();
      displayError("El campo de búsqueda no puede tener más de 20 caracteres.");
    }
  });

  function displayError(message) {
    errorContainer.textContent = message;
  }

  keywordsInput.addEventListener("input", function () {
    errorContainer.textContent = "";
  });
});
