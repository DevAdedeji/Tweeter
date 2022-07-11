import axios from "axios"

const get = async (link) =>{
    let token = localStorage.getItem("TweeterToken")
    axios.defaults.headers = {
        'Content-Type': 'application.json',
        'Authorization': `${token}`
    }
    try{
        const response = await axios.get(link)
        return response
    }catch(err){
        throw err
    }
}

export default get