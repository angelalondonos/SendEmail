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
        console.log(e.target.parentElement)
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement)
        }else{
            console.log('Si hay algo')
        }
    }

    function mostrarAlerta(mensaje, referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600')
        if(alerta){
            alerta.remove()
        }
        console.log()



        //Alertas con HTML
        const error = document.createElement('P')
        error.textContent = mensaje
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center')

        //Mostrar el error en el formulario
        referencia.appendChild(error)
    }
})