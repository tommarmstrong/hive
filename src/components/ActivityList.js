import React, { PropTypes } from 'react'
import ActivityItem from './ActivityItem'
import ListDivider from './ListDivider'

const ActivityList = ({activities}) => {

    const sections = activities.map(activity => {

        const listItems = activity.items.map(item =>
            <ActivityItem type={item.type} title={item.title} description={item.description}/>
        )

        return (
            <div className="ActivityListSection">
                <ListDivider label={activity.label}/>
                {listItems}
            </div>
        )
    })

    return (
        <div className="ActivityList">
            {sections}
        </div>
    )
}

export default ActivityList