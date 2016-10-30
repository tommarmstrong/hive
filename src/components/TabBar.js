import React, {PropTypes} from 'react'
import views from './Views/views'

const TabBar = ({view}) => (
    <div className="TabBar">
        <table>
            <tbody>
            <tr>
                <td className={(view ===  views.PROFILE ? 'selected' : '')}><img src={require("../static/icons/profile.svg")} /></td>
                <td className={(view ===  views.LEADER_BOARD ? 'selected' : '')}><img src={require("../static/icons/leaderboard.svg")} /></td>
                <td><img src={require("../static/icons/plus.svg")} /></td>
                <td className={(view ===  views.BUILDING ? 'selected' : '')}><img src={require("../static/icons/building.svg")} /></td>
                <td className={(view ===  views.STRATEGIES ? 'selected' : '')}><img src={require("../static/icons/leaf.svg")} /></td>
            </tr>
            </tbody>
        </table>
    </div>
)

TabBar.propTypes = {
    view: PropTypes.string.isRequired
}

export default TabBar