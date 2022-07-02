import axios from "axios"

const auth = async (link, data) =>{
    try{
        const response = await axios.post(link, data)
        return response
    }catch(err){
        throw err
    }
}

export default auth