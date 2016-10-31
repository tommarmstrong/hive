import React, { PropTypes } from 'react'

const GreenStratgies = ({leaderBoard}) => {

    const strategies = [{
        title: "Use your own water bottle",
        description: "Instead of buying plastic water bottles, consider using your own reusable bottle. There are taps on all levels where you can refill bottles."
    },
    {
        title: "Recycle e-waste and batteries",
        description: "Recycle e-waste and batteries by placing them in the bins at the entrance to Building 11 instead of throwing them out"
    },
    {
        title: "Reduce paper use",
        description: "Print double-sided, reduce your printing margins and use scrap paper to print drafts. Even better, go digital and avoid printing altogether"
    },
    {
        title: "Report leaks",
        description: "Report leaking taps, toilets, urinals and any other leaks to Building Services so that they can be fixed quickly."
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
            <p className="reference">Tips adapted from <a href="https://www.uts.edu.au/partners-and-community/initiatives/uts-green/campus-operations">UTS Green</a>.</p>
        </div>
    )
}

export default GreenStratgies