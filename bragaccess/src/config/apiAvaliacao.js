import axios from "axios"

const apiAvaliacao=axios.create({
    baseURL:"http://localhost:8080/api",
    headers:{
        "Content-Type":"application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        
    },
});

export default apiAvaliacao;