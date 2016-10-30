import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import views from './Views/views'
import { setView } from '../actions'

let TabBar = ({view, onViewSelection}) => {

    return (
        <div className="TabBar">
            <table>
                <tbody>
                <tr>
                    <td onClick={() => onViewSelection(views.PROFILE)} className={(view ===  views.PROFILE ? 'selected' : '')}><img src={require("../static/icons/profile.svg")} /></td>
                    <td onClick={() => onViewSelection(views.LEADER_BOARD)} className={(view ===  views.LEADER_BOARD ? 'selected' : '')}><img src={require("../static/icons/leaderboard.svg")} /></td>
                    <td><img src={require("../static/icons/plus.svg")} /></td>
                    <td onClick={() => onViewSelection(views.BUILDING)} className={(view ===  views.BUILDING ? 'selected' : '')}><img src={require("../static/icons/building.svg")} /></td>
                    <td onClick={() =>onViewSelection(views.STRATEGIES)} className={(view ===  views.STRATEGIES ? 'selected' : '')}><img src={require("../static/icons/leaf.svg")} /></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        view: state.view
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onViewSelection: (view) => {
            dispatch(setView(view))
        }
    }
}

TabBar = connect(mapStateToProps, mapDispatchToProps)(TabBar)

export default TabBar