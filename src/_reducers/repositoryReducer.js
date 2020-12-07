


const initialState = {
    repos: [{}]
}

export const repositoryReducer = (state = initialState, action) =>{
    switch(action.type){
        case "getRepositories":
            return {
                state,
            }
        case "SET_REPOSITORIES":
            return {
                ...state,
                repos: action.payload
            }
    }
}