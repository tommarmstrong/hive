import { combineReducers } from 'redux'
import { SET_VIEW } from '../actions'
import views from '../components/Views/views'

function user(state = {
    profile: {
        name: "John Appleseed"
    },
    activity: {
        "Today": {
            "stairs": 5,
            "pees": 2,
            "cups": 1
        },
        "Yesterday": {
            "stairs": 10,
            "pees": 3,
            "cups": 2
        }
    }
}, action) {
    return state
}

function buildingStats(state = [
    {
        label: "Current stats",
        items: [{
            type: "energy",
            title: "6 Mega Watts of Energy",
            lineOne: "currently being used in the building",
            lineTwo: ""
        }]
    },
    {
        label: "Total savings",
        items: [{
            type: "stairs",
            title: "6 MJ of energy saved",
            lineOne: "By not using the elevators",
            lineTwo: " 483 flights of stairs climbed"
        },
        {
            type: "phosphorous",
            title: "1 kg of Phosphorous recovered",
            lineOne: "by using the bathrooms in Building 11",
            lineTwo: "3042 pees"
        }]
    }
], action) {
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
    buildingStats,
    view
})

export default rootReducer