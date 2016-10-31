import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ActivityList from '../ActivityList'

let Profile = ({user, activities, points}) => {

    return (
        <div className="Profile">
            <img className="avatar" src={require("../../static/images/john.jpg")} />
            <div className="user-details">
                <h1 className="name">{user.profile.name}</h1>
                <p className="points">{points} points</p>
            </div>
            <h2>My Activity</h2>
            <ActivityList activities={activities}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    let activity = state.user.activity
    let activities = []

    for (let day in activity) {
        let daysActivity = []
        for (let item in activity[day]) {
            let value = activity[day][item]
            switch (item) {
                case "stairs":
                    daysActivity.push({
                        type: "stairs",
                        title: 9 * value + " kJ of energy saved",
                        lineOne: "By not using the elevators",
                        lineTwo: value + " flights of stairs climbed"
                    })
                    break
                case "pees":
                    daysActivity.push({
                        type: "phosphorous",
                        title: 3 * value + "g of Phosphorous recovered",
                        lineOne: "by using the bathrooms in Building 11",
                        lineTwo: value + " pees"
                    })
                    break
                case "cups":
                    daysActivity.push({
                        type: "coffee",
                        title: value + " paper cups saved",
                        lineOne: "by using your own cup at Penny Lane",
                        lineTwo: value + " cups"
                    })
                    break
            }

        }
        activities.push({
            label: day,
            items: daysActivity
        })
    }

    return {
        user: state.user,
        activities: activities,
        points: state.leaderBoard.Me
    }
}

Profile = connect(mapStateToProps)(Profile)

export default Profile