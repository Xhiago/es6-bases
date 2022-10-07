// console.log('Hola')
import { materias } from "./materias.js";
// import pkg from 'colors'
// console.log(materias);

//métodos de los objetos arreglos 
//foreach: recorre un arreglo
// materias.forEach(function (materia){
//     if(materia.tipo === 'técnica'){
//         console.log(`materia: ${materia.nombre}`.yellow)
//         console.log(`profesor: ${materia.instructor}`.blue)
//     }
// })

//map construye un arreglo con base en otro
const profesores = materias.map((materia)=>{
    return materia.instructor
})

// console.log(profesores)

//find: encontrar la primera ocurrencia(elemento) que cumpla con la criteria dada

// const PHP = materias.filter((materia)=>{ // en vez de find se usa filer
//     return materia.instructor === "Cristian Buitrago"
// })

const PHP = materias.find((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

//push:Agrega un elemento a un arreglo:
//  materias.push({     
//      id:4,
//      nombre: "Front-end",
//      instructor:"Julian Urrera",
//      tipo: "Técnica",
//      notas: [
//          3.3,
//         2,
//          4.4
//      ]
//  })

//splic:delete
// const splise = [materias]
// materias.splice(1);

//actualizar: findIndex
// const actualizar = [materias];
// const fi = (nombre) => nombre === "PHP Avanzado";

materias.splice( 2, 3, "PHP Basico","Java Básico","Bakc-End");

console.log(materias);