import React, { PropTypes } from 'react'

const ActivityItem = ({type, title, description}) => (
    <div className="ActivityItem">
        <p>{type}</p>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
)

ActivityItem.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default ActivityItem