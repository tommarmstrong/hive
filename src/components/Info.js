import React, { PropTypes } from 'react'

const Info = ({title, text}) => (
    <div className="Info">
        <h1>{title}</h1>
        <p>{text}</p>
    </div>
)

Info.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default Info