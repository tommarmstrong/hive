import React, { PropTypes } from 'react'
import ActivityList from '../ActivityList'

const Profile = ({user}) => {

    return (
        <div className="Profile">
            <img className="avatar" src={require("../../static/images/john.jpg")} />
            <h1 className="name">{user.profile.name}</h1>
            <h2>My Activity</h2>
            <ActivityList activities={user.activities}/>
        </div>
    )
}

export default Profile