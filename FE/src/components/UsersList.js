import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../actions'

class UsersList extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.user.department.toLowerCase())
    }
    render(){
        console.log("users", this.props.users)
        return(
            <div style={{display: 'flex', flexDirection: 'column', margin: '2.5%'}}>
                Users:
                {this.props.users && this.props.users.map(user => {
                    return <h3 key={user.id}>{user.username}</h3>
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    users: state.users
})

export default connect(
    mapStateToProps,
    { getUsers }
)(UsersList)