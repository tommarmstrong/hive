import React from 'react'
import { connect } from 'react-redux'
import PhoneApp from "../components/PhoneApp"
import Info from "../components/Info"


let App = ({view}) => (
    <div>
        <div className="iphone-container">
            <img className="iphone" src={require("../static/images/iphone.svg")} />
            <PhoneApp view={view}/>
        </div>
        <Info view={view} />
    </div>
)

const mapStateToProps = (state) => {
    return {
        view: state.view
    }
}

App = connect(mapStateToProps)(App)

export default App