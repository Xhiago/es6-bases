const axios = require('axios')
let config = {
    method: 'get',
    url: "https://pokeapi.co/api/v2/type"
}

//Método 1
// axios(config)  //response es donde llegan los datos
//     .then((response)=>{
//         response.data.results.forEach(element => {
//             console.log(`Tipo: ${element.name}`)
//         console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%`)
//         });
//     }).catch((error)=>{
//         console.log(error)
//     })

//Método 2
axios(config)  //response es donde llegan los datos
    .then((response)=>{
        return response.data.results
        })
        .then((data)=>{
            data.forEach(element => {
                console.log(`Tipo: ${element.name}`)
                console.log(`++++++++++++++++++++++++`)
            });
        })
    .catch((error)=>{
        console.log(error)
    })
