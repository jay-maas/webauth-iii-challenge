import React from 'react'
import { connect } from 'react-redux'
import ReactHtmlParser from 'react-html-parser'

class Home extends React.Component {
    render(){
        const html = this.props.data
        return(
            <body style={{textAlign: "center"}}>
                <h1>Front End</h1>
                <div style={{display: "flex", alignItems: "center"}}>
                    <p style={{margin: "0"}}>
                        This project was deployed by:
                    </p>
                    <h2 style={{margin: "0"}}> 
                        Jay Maas
                    </h2>
                </div>
                <p>
                    Message of the Day: This is the client app
                </p>
                <p>
                    Extra: Dont push all my buttons!
                </p>
                <h1 style={{marginTop: "5%"}}>Back End</h1>
                {ReactHtmlParser(html)}
            </body>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
})

export default connect(
    mapStateToProps,
    null
)(Home)