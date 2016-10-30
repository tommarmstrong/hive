import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ActivityList from '../ActivityList'

let Profile = ({user}) => {

    return (
        <div className="Profile">
            <img className="avatar" src={require("../../static/images/john.jpg")} />
            <h1 className="name">{user.profile.name}</h1>
            <h2>My Activity</h2>
            <ActivityList activities={user.activities}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

Profile = connect(mapStateToProps)(Profile)

export default Profile