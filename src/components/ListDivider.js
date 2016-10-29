import React, { PropTypes } from 'react'

const ListDivider = ({label}) => (
    <div className="ListDivider">
        <h1>{label}</h1>
    </div>
)

ListDivider.propTypes = {
    label: PropTypes.string.isRequired
}

export default ListDivider