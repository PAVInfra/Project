import api from "./api";

export function getProjects(){
    return api.get('projects/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}