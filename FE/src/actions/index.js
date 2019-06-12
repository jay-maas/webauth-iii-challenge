import axios from 'axios'

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
