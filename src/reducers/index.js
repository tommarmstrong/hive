import { combineReducers } from 'redux'
import { SET_VIEW } from '../actions'
import views from '../components/Views/views'

function user(state = {
    profile: {
        name: "John Appleseed"
    },
    activities: [
        {
            label: "Today",
            items: [
                {
                    type: "stairs",
                    title: "201 kJ of energy saved",
                    lineOne: "By not using the elevators",
                    lineTwo: " 3 flights of stairs climbed"
                },
                {
                    type: "phosphorous",
                    title: "21g of Phosphorous recovered",
                    lineOne: "by using the bathrooms in Building 11",
                    lineTwo: "2 pees"
                }
            ]
        }
    ]
}, action) {
    return state
}

function view(state = views.PROFILE, action) {
    if (action.type === SET_VIEW) {
        return action.view
    }
    else {
        return state
    }
}

const rootReducer = combineReducers({
    user,
    view
})

export default rootReducer