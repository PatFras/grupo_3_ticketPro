document.addEventListener("DOMContentLoaded", function () {
  const passwordFields = document.getElementById("passwordFields");
  const changePasswordBtn = document.getElementById("changePasswordBtn");

  changePasswordBtn.addEventListener("click", function (event) {
    event.preventDefault();
    passwordFields.style.display =
      passwordFields.style.display === "none" ? "block" : "none";
  });

  const form = document.querySelector(".profile_form");
  const nameInput = document.getElementById("name");
  const passwordInput = document.getElementById("password");
  const password2Input = document.getElementById("password2");

  form.addEventListener("submit", function (event) {
    let valid = true;

    if (nameInput.value.trim() === "") {
      document.getElementById("nameError").textContent = "Nombre es requerido";
      valid = false;
    } else {
      document.getElementById("nameError").textContent = "";
    }

    if (passwordFields.style.display !== "none") {
      if (passwordInput.value.trim() === "") {
        document.getElementById("passwordError").textContent =
          "Contraseña es requerida";
        valid = false;
      } else {
        document.getElementById("passwordError").textContent = "";
      }

      if (password2Input.value.trim() === "") {
        document.getElementById("password2Error").textContent =
          "Repetir contraseña";
        valid = false;
      } else if (password2Input.value !== passwordInput.value) {
        document.getElementById("password2Error").textContent =
          "Las contraseñas no coinciden";
        valid = false;
      } else {
        document.getElementById("password2Error").textContent = "";
      }
    }

    if (!valid) {
      event.preventDefault();
    }
  });
});
