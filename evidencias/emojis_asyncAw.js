const axios = require('axios')
let config = {
    method: 'get',
    url: "https://emojihub.herokuapp.com/api/random/group_face_positive"
}

    const f = async ()=>{
        try{
           let response = await axios(config) 
           console.log(response.data)
        }catch (error){
            console.error(error)
        }
    }
    
    f()
     