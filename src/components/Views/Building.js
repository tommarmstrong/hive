import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import ActivityList from '../ActivityList'

let Building = ({stats}) => {

    return (
        <div className="Building">
            <img className="building" src={require("../../static/images/feit.jpg")} />
            <h1 className="name">UTS:<br />ITE Building</h1>
            <ActivityList activities={stats}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        stats: state.buildingStats
    }
}

Building = connect(mapStateToProps)(Building)

export default Building