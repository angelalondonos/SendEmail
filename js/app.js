document.addEventListener('DOMContentLoaded', function(){
    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email')
    const inputMensaje = document.querySelector('#mensaje')
    const inputAsunto = document.querySelector('#asunto')
    const formulario = document.querySelector('#formulario')


    //Asignar eventos
    inputEmail.addEventListener('blur', validar)
    inputAsunto.addEventListener('blur', validar)
    inputMensaje.addEventListener('blur', validar)

    //Funciones
    function validar(e){

        if(e.target.value.trim() === ''){
            mostrarAlerta()
        }else{

        }
    }

    function mostrarAlerta(){
        //Alertas con HTML
        const error = document.createElement('P')
        error.textContent = 'Hubo un error...'
        error.classList.add('bg-red-600', 'text-white', 'p-2')

        //Mostrar el error en el formulario
        formulario.appendChild(error)
    }
})