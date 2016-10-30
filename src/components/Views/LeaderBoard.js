import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

let LeaderBoard = ({leaderBoard}) => {

    let users = leaderBoard.map((user, i) => {
        return (
            <div className="user">
                <h1>{i+1}.</h1>
                <div className="details">
                    <h2>{user.name}</h2>
                    <p>{user.points} points</p>
                </div>
            </div>
        )
    })

    return (
        <div className="LeaderBoard">
            {users}
        </div>
    )
}

const mapStateToProps = (state) => {
    let sort = (a,b) => {
        return b.points - a.points
    }
    let leaderBoard = []
    for (let name in state.leaderBoard) {
        leaderBoard.push({name: name, points: state.leaderBoard[name]})
    }
    leaderBoard.sort(sort)

    return {
        leaderBoard: leaderBoard
    }
}

LeaderBoard = connect(mapStateToProps)(LeaderBoard)

export default LeaderBoard