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

  $("price").addEventListener("focus", function () {
    $("msg-error-price").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("price").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $("msg-error-price").innerHTML = "El precio es obligatorio";
        this.classList.add("is-invalid");
        break;
      case this.value.trim() < 0:
        $("msg-error-price").innerHTML = "El precio no puede ser negativo";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-price").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("serviceCharge").addEventListener("focus", function () {
    $("msg-error-serviceCharge").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("serviceCharge").addEventListener("blur", function () {
    const priceValue = parseFloat($("price").value.trim());
    const serviceChargeValue = parseFloat(this.value.trim());

    switch (true) {
      case isNaN(serviceChargeValue):
        $("msg-error-serviceCharge").innerHTML =
          "Ingrese un valor numérico para el cargo de servicio";
        this.classList.add("is-invalid");
        break;
      case serviceChargeValue < 0:
        $("msg-error-serviceCharge").innerHTML =
          "El cargo de servicio no puede ser negativo";
        this.classList.add("is-invalid");
        break;
      case serviceChargeValue > priceValue:
        $("msg-error-serviceCharge").innerHTML =
          "El cargo de servicio no puede ser mayor al precio";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-serviceCharge").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("address").addEventListener("focus", function () {
    $("msg-error-address").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("address").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $("msg-error-address").innerHTML = "La dirección no puede quedar vacía";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\s]*$/.test(this.value.trim()):
        $("msg-error-address").innerHTML =
          "La dirección solo puede contener letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-address").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("location").addEventListener("focus", function () {
    $("msg-error-location").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("location").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $("msg-error-location").innerHTML = "La ciudad no puede quedar vacía";
        this.classList.add("is-invalid");
        break;
      case !/^[a-zA-Z0-9\s]*$/.test(this.value.trim()):
        $("msg-error-location").innerHTML =
          "La ciudad solo puede contener letras y números";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-location").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("date").addEventListener("focus", function () {
    $("msg-error-date").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("date").addEventListener("blur", function () {
    const currentDate = new Date();
    const selectedDate = new Date(this.value);

    switch (true) {
      case !this.value:
        $("msg-error-date").innerHTML = "La fecha es obligatoria";
        this.classList.add("is-invalid");
        break;
      case selectedDate < currentDate:
        $("msg-error-date").innerHTML = "La fecha no puede ser en el pasado";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-date").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("category").addEventListener("focus", function () {
    $("msg-error-category").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("category").addEventListener("blur", function () {
    switch (true) {
      case this.value === "":
        $("msg-error-category").innerHTML = "Seleccione una categoría";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-category").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("section").addEventListener("focus", function () {
    $("msg-error-section").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("section").addEventListener("blur", function () {
    switch (true) {
      case this.value === "":
        $("msg-error-section").innerHTML = "Seleccione una sección";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-section").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("formFile").addEventListener("focus", function () {
    $("msg-error-image").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("formFile").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $("msg-error-image").innerHTML = "Seleccione una imagen";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-image").innerHTML = null;
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
        break;
    }
  });

  $("description").addEventListener("focus", function () {
    $("msg-error-description").innerHTML = null;
    this.classList.remove("is-invalid");
  });

  $("description").addEventListener("blur", function () {
    switch (true) {
      case !this.value.trim():
        $("msg-error-description").innerHTML = "La descripción es obligatoria";
        this.classList.add("is-invalid");
        break;
      default:
        $("msg-error-description").innerHTML = null;
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
