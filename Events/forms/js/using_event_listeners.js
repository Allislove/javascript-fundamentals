// Logica de validacion, restricciones etc...
function checkUsername() {
    var elMensaje = document.getElementById("mensajeAqui");
    if(this.value.length < 5) {
        elMensaje.textContent = "El nombre de usuario debe tener mas de 4 caracteres"
    }else {
        elMensaje.textContent = "";
    }
}

// En donde se aplicara la logica! es decir la logica se aplicara referente a el id "username"
var username = document.getElementById("username");
username.addEventListener("blur", checkUsername, false);
