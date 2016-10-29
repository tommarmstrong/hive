import React, {PropTypes} from 'react'

const TabBar = ({screen}) => (
    <div className="TabBar">
        <table>
            <tbody>
                <tr>
                    <td><img src={require("../static/icons/profile.svg")} /></td>
                    <td><img src={require("../static/icons/leaderboard.svg")} /></td>
                    <td><img src={require("../static/icons/plus.svg")} /></td>
                    <td><img src={require("../static/icons/building.svg")} /></td>
                    <td><img src={require("../static/icons/leaf.svg")} /></td>
                </tr>
            </tbody>
        </table>
    </div>
)

TabBar.propTypes = {
    screen: PropTypes.string.isRequired
}

export default TabBar