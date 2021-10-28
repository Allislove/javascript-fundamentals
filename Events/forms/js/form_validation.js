function checkUsername() {
    var elMsg = document.getElementById("mensajeAqui");
    var userName = document.getElementById("username");
    if(userName.value.length < 5) {
        elMsg.textContent = "El nombre de usuario debe de tener mas de 4 caracteres! "
    }else {
        elMsg.textContent = "";
    }
}


