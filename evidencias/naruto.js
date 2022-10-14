const axios = require('axios')
let config = {
    method: 'get',
    url: "https://animechan.vercel.app/api/quotes/anime?title=naruto"
}
const f = async ()=>{
    try{
       let response = await axios(config) 
       response.data.forEach(elemet => {
        console.log(`Nombre: ${element.name}`)
        console.log(`Caracter: ${element.character}`)
        console.log(`Deberaaaaaaaaaaaaaaaaaaaas`)
       });
    }catch (error){
        console.error(error)
    }
}

f()
