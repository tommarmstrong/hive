import React, { PropTypes } from 'react'
import StatusBar from './StatusBar'
import TabBar from './TabBar'
import Profile from './Views/Profile'
import views from './Views/views'

const PhoneApp = ({view}) => {

    let user = {
        profile: {
            name: "John Applessed",
            image: "john.png"
        },
        activities: [
            {
                label: "Today",
                items: [
                    {
                        type: "Type",
                        title: "Title",
                        description: "Description"
                    },
                    {
                        type: "Type",
                        title: "Title",
                        description: "Description"
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