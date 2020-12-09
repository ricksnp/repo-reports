


const initialState = {
    file: '',
    content: ''
}

export const contentReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_CONTENT":
            return {
                ...state,
                file: action.payload.file,
                content: action.payload.content
            }
        default:
            return state;

    }
}