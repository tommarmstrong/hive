import React, { PropTypes } from 'react'
import StatusBar from './StatusBar'
import TabBar from './TabBar'
import Profile from './Views/Profile'
import Building from './Views/Building'
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

    let buildingStats = [
        {
            label: "Current stats",
            items: [{
                type: "energy",
                title: "5 Mega Watts of Energy",
                lineOne: "currently being used in the building",
                lineTwo: ""
            }]
        }
    ]

    let viewComponent

    switch (view) {
        case views.PROFILE:
            viewComponent = <Profile user={user}/>
            break
        case views.BUILDING:
            viewComponent = <Building stats={buildingStats}/>
            break
    }

    return (
        <div className="PhoneApp">
            <StatusBar/>
            <div className="view">
                {viewComponent}
            </div>
            <TabBar view={view}/>
        </div>
        )
}

PhoneApp.propTypes = {
    view: PropTypes.string.isRequired
}

export default PhoneApp