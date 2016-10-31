import React, { PropTypes } from 'react'
import views from './Views/views'

let info = {
    [views.PROFILE]: {
        title: "User profile",
        text: ["The profile page allows users to track their contributions each day to making UTS Building 11 more sustainable. It lists the amount of energy they have saved by not using the elevators and instead using the stairs, how much phosphorous has been recovered by the building from their pee and how many paper cups they have saved by using reusable cups. Additionally, as each activity carries a certain number of points, it shows the user their total point balance for the week."]
    },
    [views.LEADER_BOARD]: {
        title: "Leaderboard",
        text: ["The leaderboard shows the users with the most points each week and encourages friendly competition between users to see who can be the most sustainable.", "Try to see if you can beat Michael Bell!"]
    },
    [views.BUILDING]: {
        title: "Building",
        text: ["The building page shows real-time information to the user about the energy usage of the building as well as the number of people currently occupying it. While the leaderboard encourages competition, this page reinforces the idea of a hive where many people work together to encourage sustainable practices.  To do this, it also shows the total amount of savings tracked by users within the building so their collective impact can be seen. "]
    },
    [views.STRATEGIES]: {
        title: "Green tips",
        text: ["This page provides tips on how users can act more sustainably within the building. This could be updated regularly to share new tips with users on an ongoing basis."]
    },
}

const Info = ({view}) => {

    let text = info[view].text.map(text => (
        <p>{text}</p>
    ))

    return(
        <div className="Info">
            <h1>{info[view].title}</h1>
            <div>{text}</div>
        </div>
    )
}

Info.propTypes = {
    view: PropTypes.string.isRequired,
}

export default Info