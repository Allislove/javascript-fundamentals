// validacion logica
function checkUsername() {
    var elMensaje = document.getElementById("mensajeAqui");
    if(this.value.length < 5) {
        elMensaje.textContent = "El nombre de usuario debe tener mas de 4 caracteres"
    }else {
        elMensaje.textContent = "";
    }
}

// se aplicara la logica, para este id, es decir aplicara el metodo .onblur en este id
var username = document.getElementById("username");
username.onblur = checkUsername;
