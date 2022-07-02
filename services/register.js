import axios from "axios"

const register = async (link, data) =>{
    try{
        const response = await axios.post(link, data)
        return response
    }catch(err){
        throw err
    }
}

export default register