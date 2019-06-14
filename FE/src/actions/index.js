import axios from 'axios'
import { axiosWithAuth } from '../axiosWithAuth'

export const SERVER_CHECK_START = 'SERVER_CHECK_START'
export const SERVER_CHECK_SUCCESS = 'SERVER_CHECK_SUCCESS'
export const SERVER_CHECK_ERROR = 'SERVER_CHECK_ERROR'

export const checkServer = () => dispatch => {
    dispatch({ type: SERVER_CHECK_START})

    axios
        .get('http://localhost:4000/')
        .then(res => {
            console.log(res)
            dispatch({
                type: SERVER_CHECK_SUCCESS,
                payload: {
                    message: "Server is on and ready for requests...",
                    data: res.data
                }
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: SERVER_CHECK_ERROR,
                payload: "The server is not awake/functioning."
            })
        })
}


export const LOGIN_START = 'LOGIN_START'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START })
    
    axios
        .post('http://localhost:4000/api/auth/login', creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.user.token)
            dispatch({
                type: LOGIN_SUCCESS, 
                payload: {
                    message: res.data.message,
                    user: {
                        ...res.data.user
                    }
                }
            })
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_ERROR,
                payload: 'Error'
            })
        })
}

export const REGISTER_START = 'REGISTER_START'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'

export const register = creds => dispatch => {
    dispatch({ type: REGISTER_START })
    
    return axios
        .post('http://localhost:4000/api/auth/register', creds)
        .then(res => {
            console.log(res)
            // localStorage.setItem('token', res.data.payload)
            // dispatch({
            //     type: REGISTER_SUCCESS, 
            //     payload: res.data.payload
            // })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: REGISTER_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}

export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export const getUsers = departmentName => dispatch => {
    dispatch({ type: GET_USERS_START })
    
    axiosWithAuth()
        .get(`http://localhost:4000/api/users/departments/${departmentName}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_USERS_SUCCESS, 
                payload: {
                    users: res.data.users,
                    message: 'Users succesfully retrieved for your department.'
                }
            })
        })
        .catch((err) => {
            console.log(err.response.data)
            dispatch({
                type: GET_USERS_ERROR,
                payload: `${err.response.data.error}`
            })
        })
}
