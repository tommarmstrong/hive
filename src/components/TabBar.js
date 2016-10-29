import React, {PropTypes} from 'react'

const TabBar = ({screen}) => (
    <div className="TabBar">
        <table>
            <tbody>
                <tr>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                    <td>x</td>
                </tr>
            </tbody>
        </table>
    </div>
)

TabBar.propTypes = {
    screen: PropTypes.string.isRequired
}

export default TabBar