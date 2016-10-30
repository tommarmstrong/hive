import React, { PropTypes } from 'react'
import ActivityList from '../ActivityList'

const Building = ({stats}) => {

    return (
        <div className="Building">
            <img className="building" src={require("../../static/images/feit.jpg")} />
            <h1 className="name">UTS:<br />ITE Building</h1>
            <ActivityList activities={stats}/>
        </div>
    )
}

Building.propTypes = {
    stats: PropTypes.array.isRequired
}

export default Building