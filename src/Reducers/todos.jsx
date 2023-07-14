const initialState = {
    userlist: [],
    loading: true,
    errmessage: ""
}
export default function todos(state = initialState, action) {
    switch (action.type) {
        case "MAKE_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FAIL_REQUEST":
            return {
                ...state,
                loading: true,
                errmessage: action.payload
            }
        case "GET_USERLIST":
            return {
                loading: false,
                errmessage: " ",
                userlist: action.payload,
            }
        case "DELETE_USERDATA":
            return {
                ...state,
                loading: true,
            }

        case "ADD_USER":
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}