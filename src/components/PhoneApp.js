import React, { PropTypes } from 'react'
import StatusBar from './StatusBar'
import TabBar from './TabBar'
import Profile from './Views/Profile'
import views from './Views/views'

const PhoneApp = ({view}) => {

    let user = {
        profile: {
            name: "John Appleseed"
        },
        activities: [
            {
                label: "Today",
                items: [
                    {
                        type: "stairs",
                        title: "201 kJ of energy saved",
                        lineOne: "By not using the elevators",
                        lineTwo: " 3 flights of stairs climbed"
                    },
                    {
                        type: "phosphorous",
                        title: "21g of Phosphorous recovered",
                        lineOne: "by using the bathrooms in Building 11",
                        lineTwo: "2 pees"
                    }
                ]
            }
        ]
    }

    let viewComponent

    switch (view) {
        case views.PROFILE:
            viewComponent = <Profile user={user}/>
    }

    return (
        <div className="PhoneApp">
            <StatusBar/>
            <div className="view">
                {viewComponent}
            </div>
            <TabBar screen="a"/>
        </div>
        )
}

PhoneApp.propTypes = {
    view: PropTypes.string.isRequired
}

export default PhoneApp