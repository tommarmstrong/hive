import React, { PropTypes } from 'react'

const GreenStratgies = ({leaderBoard}) => {

    const strategies = [{
        title: "Use your own water bottle",
        description: "Instead of buying plastic water bottles, consider using your own reusable bottle"
    }]

    let s = strategies.map((strategy) => {
        return (
            <div className="strategy">
                <h1>{strategy.title}</h1>
                <p>{strategy.description}</p>
            </div>
        )
    })

    return (
        <div className="GreenStrategies">
            {s}
        </div>
    )
}

export default GreenStratgies