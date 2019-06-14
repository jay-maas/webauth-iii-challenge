import React from 'react'
import { connect } from 'react-redux'
import { register } from '../actions'
import { withRouter } from 'react-router-dom'

class RegisterPage extends React.Component {
    state= {
        credentials: {
            username: '',
            password: '',
            department: ''
        }
    }
    handleChange = e => {
            this.setState({
                credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }}) 
    }
    register = e => {
        e.preventDefault()
        console.log(this.state.credentials)
        this.props.register(this.state.credentials)
            .then(() => {
                this.props.history.push('/home')
        })
    }
    render(){
        return (
            <>
                <form onSubmit={this.register}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        placeholder="username"
                    />
                    <input 
                        type="text"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    <input 
                        type="text"
                        department="department"
                        value={this.state.credentials.department}
                        onChange={this.handleChange}
                        placeholder="department"
                    />
                    <button>
                        Register User
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = state => ({
    registering: state.registering,
})

export default connect(
    mapStateToProps,
    { register }
) (withRouter(RegisterPage))