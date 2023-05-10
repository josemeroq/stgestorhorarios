function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Definir las expresiones regulares para validar los campos
    var regexNombre = /^[a-zA-Z ]+$/;
    var regexEmail = /^\S+@\S+\.\S+$/;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
    // Validar el nombre
    if (!regexNombre.test(nombre)) {
      document.getElementById("nombreError").innerHTML = "El nombre debe contener solo letras y espacios";
      return false;
    } else {
      document.getElementById("nombreError").innerHTML = "";
    }
  
    // Validar el apellido
    if (!regexNombre.test(apellido)) {
      document.getElementById("apellidoError").innerHTML = "El apellido debe contener solo letras y espacios";
      return false;
    } else {
      document.getElementById("apellidoError").innerHTML = "";
    }
  
    // Validar el email
    if (!regexEmail.test(email)) {
      document.getElementById("emailError").innerHTML = "El email no es válido";
      return false;
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  
    // Validar la contraseña
    if (!regexPassword.test(password)) {
      document.getElementById("passwordError").innerHTML = "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número";
      return false;
    } else {
      document.getElementById("passwordError").innerHTML = "";
    }
  
    return true;
  }
  function registroCompletado() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Verificar si todos los campos están vacíos
    if (nombre === "" && apellido === "" && email === "" && password === "") {
      return false; // Salir de la función sin mostrar el mensaje
    }
  
    // Validación de campos...
  
    // Si los campos son válidos, mostramos el mensaje de registro completado.
    document.getElementById("mensaje").innerHTML += "<p class='registro-completado'>Registro completado. ¡Gracias por registrarte!</p>";
  
    // Limpiamos los campos del formulario.
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  
    setTimeout(function() {
      document.getElementById("mensaje").innerHTML = "";
    }, 3000);
    // Evitamos que el formulario se envíe.
    return false;
  }