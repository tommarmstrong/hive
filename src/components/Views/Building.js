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
    let activity = state.buildingStats.activity
    let totalActivity = {
        label: "Total Savings",
        items: []
    }
    for (let item in activity) {
        let value = activity[item] + state.user.activity.Today[item]
        switch (item) {
            case "stairs":
                totalActivity.items.push({
                    type: "stairs",
                    title: 9 * value + " kJ of energy saved",
                    lineOne: "By not using the elevators",
                    lineTwo: value + " flights of stairs climbed"
                })
                break
            case "pees":
                totalActivity.items.push({
                    type: "phosphorous",
                    title: 3 * value + "g of Phosphorous recovered",
                    lineOne: "by using the bathrooms in Building 11",
                    lineTwo: value + " pees"
                })
                break
            case "cups":
                totalActivity.items.push({
                    type: "coffee",
                    title: value + " paper cups saved",
                    lineOne: "by using your own cup at Penny Lane",
                    lineTwo: value + " cups"
                })
                break
        }
    }

    return {
        stats: [state.buildingStats.current, totalActivity]
    }
}

Building = connect(mapStateToProps)(Building)

export default Building