import React, { PropTypes } from 'react'
import StatusBar from './StatusBar'
import TabBar from './TabBar'
import NavBar from './NavBar'
import Profile from './Views/Profile'
import Building from './Views/Building'
import LeaderBoard from './Views/LeaderBoard'
import Add from './Add'
import views from './Views/views'

const PhoneApp = ({view}) => {

    let viewComponent, title

    switch (view) {
        case views.PROFILE:
            viewComponent = <Profile/>
            title = "My Profile"
            break
        case views.BUILDING:
            viewComponent = <Building/>
            title = "Building Info"
            break
        case views.LEADER_BOARD:
            viewComponent = <LeaderBoard/>
            title = "Leaderboard"
            break
        case views.STRATEGIES:
            viewComponent = null
            title = "Green Strategies"
            break
    }

    return (
        <div className="PhoneApp">
            <StatusBar/>
            <NavBar title={title}/>
            <div className="view">
                {viewComponent}
            </div>
            <TabBar/>
            <Add />
        </div>
        )
}

PhoneApp.propTypes = {
    view: PropTypes.string.isRequired
}

export default PhoneApp