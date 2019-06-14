import React from 'react'
import { connect } from 'react-redux'
import { DevInfo, Marketing, UsersList } from '../components'

class Home extends React.Component {
    state = {
        isShowing: false
    }

    clickHandler = e => {
        e.preventDefault()
        this.setState({
            isShowing: !this.state.isShowing
        })
    }

    render(){
        const conditionalMessage = this.state.isShowing ? "Click to close dev info!" : "Click to see dev info!"
        return(
            <>
                <div style={{zIndex: "5", margin: "1.5%", position: "fixed", bottom: "0", left: "0"}}>
                    <button onClick={this.clickHandler} style={{width: "7.5vw", padding: "2.5%"}}>
                    {conditionalMessage}
                    </button>
                </div>

                {this.state.isShowing && 
                    <div style={{zIndex: "3", border: "1px solid lightgrey", borderRadius: "50px", padding: "1.5%"}}>
                        <DevInfo />
                    </div>
                }

                {!this.props.loggedIn && <Marketing />}
                {this.props.loggedIn && !this.state.isShowing && <UsersList />}
            </>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
    loggedIn: state.loggedIn
})

export default connect(
    mapStateToProps,
    null
)(Home)