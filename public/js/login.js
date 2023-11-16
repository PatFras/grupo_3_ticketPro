let $ = (id) => document.getElementById(id);
let validarEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

$("email").addEventListener("input", function () {
  if (!validarEmail.test(this.value)) {
    if (!this.value.trim()) {
      $("msg-error-email").innerText = "El email es obligatorio";
      $("msg-error-email").hidden = false;
    } else {
      $("msg-error-email").innerText = "No es un email valido";
      $("msg-error-email").hidden = false;
    }
  } else {
    $("msg-error-email").hidden = true;
  }
});

$("password").addEventListener("input", function () {
  if (!this.value.trim()) {
    $("msg-error-password").hidden = false;
  } else {
    $("msg-error-password").hidden = true;
  }
});
