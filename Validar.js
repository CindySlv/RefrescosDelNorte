function validarUsuario(){
    let user = document.forms["formulario"]["usuario"].value;
    let psw = document.forms["formulario"]["contraseña"].value;
    if (user == "cindy" && psw == "examen") {
        sessionStorage.setItem("Ingresocorrecto", "True")
        return true;
        }
        
        sessionStorage.setItem("Ingresocorrecto", "False")
        alert("Ingrese correctamente su usuario y contraseña")
        return false;
    



}


