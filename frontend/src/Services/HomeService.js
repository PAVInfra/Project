import api from "./api";
// import from "axios";
export function getAwards(){
    return api.get('home/awards/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}