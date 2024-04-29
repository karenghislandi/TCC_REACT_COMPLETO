import axios from "axios"

const apiEstabelecimento=axios.create({
    baseURL:"http://localhost:8080/api",
    headers:{
        "Content-Type":"multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        
    },
});

export default apiEstabelecimento;