import { SERVER_CHECK_START, SERVER_CHECK_SUCCESS, SERVER_CHECK_ERROR } from '../actions/'

const initialState = {
    checkingServer: false,
    serverListening: false,
    data: null,
    error: '',
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case SERVER_CHECK_START:
           return {
               ...state,
               checkingServer: true,
               message: '',
               error: '',
           }
        case SERVER_CHECK_SUCCESS:
            return {
                ...state,
                checkingServer: false,
                message: action.payload.message,
                data: action.payload.data,
                error: ''
            }
        case SERVER_CHECK_ERROR:
            return {
                ...state,
                checkingServer: false,
                message: '',
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer