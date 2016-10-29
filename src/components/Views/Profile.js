import React, { PropTypes } from 'react'
import ActivityList from '../ActivityList'

const Profile = ({user}) => {

    return (
        <div>
            <h1>{user.profile.name}</h1>
            <h2>My Activity</h2>
            <ActivityList activities={user.activities}/>
        </div>
    )
}

export default Profile