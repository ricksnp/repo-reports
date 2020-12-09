export const SET_GITNAME = "SET_GITNAME";
export const GET_GITNAME = "GET_GITNAME";



export const setGitName = (payload) => {
    return { type: SET_GITNAME, payload };
}


export const getGitName = () => {
    return { type: GET_GITNAME };
}