import React, {PropTypes} from 'react'

const NavBar = ({title}) => (
    <div className="NavBar">
        <p>{title}</p>
    </div>
)

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}

export default NavBar