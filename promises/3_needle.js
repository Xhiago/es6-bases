const needle = require("needle");

// const needle = new needle()

const url = "https://pokeapi.co/api/v2/type"

needle('GET' , url)
.then((response)=>{
    return response
}).then((aja)=>{
   aja.body.results.forEach(element => { 
    console.log(`Tipo: ${element.name}`)
    console.log(`&&&&&&&&&&&&&&&&&&&&&&`)
    })
}).catch(()=>{

})