


const initialState = {
    gitName: ''
}

export const gitNameReducer = (state = initialState, action) =>{
    switch(action.type){
        case "getGitName":
            return {
                state,
            }
        case "SET_GITNAME":
            return {
                ...state,
                gitName: action.payload
            }
        default:
            return state;
            
    }
}