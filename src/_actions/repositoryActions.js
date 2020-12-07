export const SET_REPOSITORIES = "SET_REPOSITORIES";
export const GET_REPOSITORIES = "GET_REPOSITORIES";



export const setRepositories = (payload) => {
    return { type: SET_REPOSITORIES, payload };
}


export const getRepositories = () => {
    return { type: GET_REPOSITORIES };
}