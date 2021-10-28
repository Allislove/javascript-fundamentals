// Logica de validacion, restricciones etc...
var username = document.getElementById('username');
var elMensaje = document.getElementById("mensajeAqui");

function checkUsername(minLength) {
    if(username.value.length < minLength) {
        elMensaje.textContent = `El nombre de usuario debe de tener ${minLength} o mas caracteres `
    }else {
        elMensaje.textContent = "";
    }
}

// En donde se aplicara la logica! es decir la logica se aplicara referente a el id "username"
var username = document.getElementById("username");
username.addEventListener("blur", function() {
    checkUsername(7);

}, false);


//o con arrow function
/* username.addEventListener("blur", () => {
    checkUsername(7);

}, false); */
