let username = document.getElementById('user');
let password = document.getElementById('pswd');

function letsgo(){

    if (document.form.user.value==='' || document.form.password.value===''){ 
        alert("Por favor ingrese su nombre de usuario y contraseña.")            
        } 
        else{ 
            if (!document.form.user.value.includes('@')){                 
                alert("Su nombre de usuario debe contener @.")                          
                } 
                else{
                    alert(`No se olvide que su usuario es ${document.form.user.value} y su contraseña ${document.form.password.value}`)
                    document.form.submit(); 
                }
    } 
}
