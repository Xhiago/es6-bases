function llamarAlumno( alumno , callbak){
    let LlamadaAlumno = 'Llamado al alumno: ${alumno}'
    //ejecutar la funcion callback
    cancelIdleCallback(llamadaAlumno)
}

//definir funcion callback
const imprimir=(texto) =>{
    console.log(texto)
}

//invocar la funcion principal de llamar alumno
llamarAlumno("Cristian Buitrago", imprimir)