import axios from "axios"

//const token=localStorage.getItem("token")
        
const apiAuth =axios.create({
    baseURL:"http://localhost:3050", 
});


export default apiAuth;