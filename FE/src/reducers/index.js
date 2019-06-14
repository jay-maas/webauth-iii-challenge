import { SERVER_CHECK_START, SERVER_CHECK_SUCCESS, SERVER_CHECK_ERROR,
LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR,
REGISTER_START, REGISTER_SUCCESS, REGISTER_ERROR,
GET_USERS_START, GET_USERS_SUCCESS, GET_USERS_ERROR,
} from '../actions/'

const initialState = {
    checkingServer: false,
    serverListening: false,
    loggingIn: false,
    registering: false,
    gettingUsers: false,
    data: null,
    user: null,
    users: null,
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
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                message: '',
                error: ''
            }
        case LOGIN_ERROR:
            return {
                ...state,
                logginIn: false,
                message: '',
                error: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                logginIn: false,
                loggedIn: true,
                user: action.payload.user,
                message: action.payload.message,
                error: ''
            }
        case REGISTER_START:
            return {
                ...state,
                registering: true,
                message: '',
                error: ''
            }
        case REGISTER_ERROR:
            return {
                ...state,
                registering: false,
                message: '',
                error: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                registering: false,
                message: '',
                error: ''
            }
        case GET_USERS_START:
            return {
                ...state,
                gettingUsers: true,
                message: '',
                error: ''
            }
        case GET_USERS_ERROR:
            return {
                ...state,
                gettingUsers: false,
                message: '',
                error: action.payload
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                gettingUsers: false,
                users: action.payload.users,
                message: action.payload.message,
                error: ''
            }
        default:
            return state
    }
}

export default reducer