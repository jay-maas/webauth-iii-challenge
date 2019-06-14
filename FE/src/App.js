import React from 'react';
import { connect } from 'react-redux'
import { checkServer } from './actions'
import { Route } from 'react-router-dom'
import { Navigation } from './components'
import UserHelper from './components/UserHelper';
import { Home, LogIn, Register } from './pages'

class App extends React.Component {
  componentDidMount() {
    this.props.checkServer()
  }
  render() {
    const conditionalForHelper = this.props.checkingServer || this.props.message || this.props.error
    
    return (
      <>
        <Navigation loggedIn={this.props.loggedIn}/>
        {conditionalForHelper &&  <UserHelper passed={this.props}/>}
        <div style={{marginTop: "10vh", width: "100vw", height: "90vh", display: "flex", justifyContent: "center", alignItems: "center"}}>

          <Route exact path ="/" component={Home}/>
          <Route exact path ="/login" component={LogIn}/>
          <Route exact path ="/register" component={Register}/>
          
        </div>
      </>
    )
  }
}

const mapStateToProps = state => ({
  checkingServer: state.checkingServer,
  message: state.message,
  error: state.error,
  loggedIn: state.loggedIn
})

export default connect(
  mapStateToProps,
  { checkServer }
)(App)
