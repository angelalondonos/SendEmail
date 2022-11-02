document.addEventListener('DOMContentLoaded', function(){
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputMensaje = document.querySelector('#mensaje')
    const inputAsunto = document.querySelector('#asunto')

    //Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    //Funciones
    function validar(e){
        console.log(e.target.value)
    }
})