const $ = (id) => document.getElementById(id);

window.onload = function () {
  $("name").addEventListener("focus", function () {
    $("msg-error-name").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("name").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-error-name").innerHTML = "El nombre es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[A-Za-z]+$/.test(this.value):
        $("msg-error-name").innerHTML = "Solo caracteres alfabéticos";
        this.classList.add("is-invalid");
        break;
      case this.value.trim().length < 2:
        $("msg-error-name").innerHTML = "Mínimo dos caracteres";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-name").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("email").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-error-email").innerHTML = "El email es obligatorio";
        this.classList.add("is-invalid");
        break;
      case !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.value):
        $("msg-error-email").innerHTML = "El email es inválido";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-email").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("email").addEventListener("focus", function () {
    $("msg-error-email").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("email").addEventListener("change", async function (e) {
    try {
      const response = await fetch(`/api/check-email?email=${this.value}`);
      const result = await response.json();

      if (result.data) {
        $("msg-error-email").innerHTML = "El email ya se encuentra registrado";
        this.classList.add("is-invalid");
      }
    } catch (error) {
      console.error();
    }
  });

  $("password").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-error-password").innerHTML = "La contraseña es obligatoria";
        this.classList.add("is-invalid");
        break;
      case !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,12}$/.test(
        this.value
      ):
        $("msg-error-password").innerHTML =
          "Entre 6 y 12 caracteres, un número, una mayúscula y un caracter especial";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-password").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("password").addEventListener("focus", function () {
    $("msg-error-password").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("password2").addEventListener("blur", function () {
    $("msg-error-password2").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("password2").addEventListener("blur", function (e) {
    switch (true) {
      case !this.value.trim():
        $("msg-error-password2").innerHTML = "Debes confirmar tu contraseña";
        this.classList.add("is-invalid");
        break;
      case this.value.trim() !== $("password").value.trim():
        $("msg-error-password2").innerHTML = "Las contraseñas no coinciden";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-password2").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("formAdd").addEventListener("blur", function (e) {
    e.preventDefault();

    const elementsForm = $("formAdd").elements;
    let error = false;

    for (let i = 0; i < elementsForm.length - 1; i++) {
      if (
        !elementsForm[i].value.trim() ||
        elementsForm[i].classList.contains("is-invalid")
      ) {
        elementsForm[i].classList.add("is-invalid");
        $("msg-error-empty").innerHTML = "Hay errores en la carga de datos";
        error = true;
      }
    }

    !error && this.submit();
  });
};
