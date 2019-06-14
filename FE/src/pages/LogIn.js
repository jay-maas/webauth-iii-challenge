import React from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    state= {
        credentials: {
            username: '',
            password: ''
        }
    }
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }
    login = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        this.props.login(this.state.credentials)
    }
    render(){
        return (
            <>
            {this.props.loggedIn && this.props.history.push('/')}
                <form onSubmit={this.login}>
                    Username
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                    />
                    Password
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>
                        {this.props.loggingIn ? 
                                this.props.error ? 
                                    'Login' : 'Logging In....' 
                             : 
                                'Log In'
                        }
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    loggingIn: state.loggingIn,
    loggedIn: state.loggedIn,
    error: state.error
})

export default connect(
    mapStateToProps,
    { login }
) (withRouter(Login))