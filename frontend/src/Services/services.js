import api from "./api";

export function getServices(){
    return api.get('services/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getProjects(){
    return api.get('projects/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getOngoingProjects(){
    return api.get('projects/?status=ongoing')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getCompletedProjects(){
    return api.get('projects/?status=completed')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getCBProjects(customer){
    return api.get(`projects/?customer-name=${customer}`)
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getAwards(){
    return api.get('services/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getMachine(){
    return api.get('machine/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getSocial(){
    return api.get('aboutus/social/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}

export function getWhyWeStandApart(){
    return api.get('aboutus/whywestandapart/')
    .then(response =>{
        console.log(response)
        return response.data;
    }
    )
}