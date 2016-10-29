import React, { PropTypes } from 'react'

const ActivityItem = ({type, title, lineOne, lineTwo}) => (
    <div className="ActivityItem">
        <div className={"activity-icon " + type} />
        <div className="details">
            <h1>{title}</h1>
            <p>{lineOne}</p>
            <p>{lineTwo}</p>
        </div>
    </div>
)

ActivityItem.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lineOne: PropTypes.string.isRequired,
    lineTwo: PropTypes.string
}

export default ActivityItem