import React from "react"
import { connect } from "react-redux"
import { addCup, addPee, toggleAdd } from "../actions"

let Add = ({visible, addPee, addCup, cancel}) => {
    if (visible) {
        return (
            <div className="Add">
                <ul>
                    <li onClick={() => addPee()}>Add pee</li>
                    <li onClick={() => addCup()}>Add reusable cup use</li>
                    <li onClick={() => cancel()}>Cancel</li>
                </ul>
            </div>
        )
    }
    return null
}

const mapStateToProps = (state) => {
    return {
        visible: state.addVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCup: () => {
            dispatch(addCup())
            dispatch(toggleAdd())
        },
        addPee: () => {
            dispatch(addPee())
            dispatch(toggleAdd())
        },
        cancel: () => {
            dispatch(toggleAdd())
        }
    }
}

Add = connect(mapStateToProps, mapDispatchToProps)(Add)

export default Add