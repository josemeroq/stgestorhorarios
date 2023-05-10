function validarLogin() {
    // Obtener los valores de los campos del formulario
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Definir las expresiones regulares para validar los campos
    var regexEmail = /^\S+@\S+\.\S+$/;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

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
        
    // Redirigir a la página principal si la validación es correcta
    window.location.href = "index.html";

    return true;
}




