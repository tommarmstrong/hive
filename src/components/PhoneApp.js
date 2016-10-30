import React, { PropTypes } from 'react'
import StatusBar from './StatusBar'
import TabBar from './TabBar'
import Profile from './Views/Profile'
import Building from './Views/Building'
import Add from './Add'
import views from './Views/views'

const PhoneApp = ({view}) => {

    let viewComponent

    switch (view) {
        case views.PROFILE:
            viewComponent = <Profile/>
            break
        case views.BUILDING:
            viewComponent = <Building/>
            break
    }

    return (
        <div className="PhoneApp">
            <StatusBar/>
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