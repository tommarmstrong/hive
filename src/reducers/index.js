import { combineReducers } from 'redux'
import { SET_VIEW, ADD_CUP, ADD_PEE, HIDE_ADD, TOGGLE_ADD, ADD_POINTS} from '../actions'
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
    if (action.type === ADD_CUP) {
        return {
            ...state, activity: {
                ...state.activity,
                "Today": {
                    ...state.activity.Today,
                    "cups": state.activity.Today.cups + 1
                }
            }
        }

    }
    if (action.type === ADD_PEE) {
        return {
            ...state, activity: {
                ...state.activity,
                "Today": {
                    ...state.activity.Today,
                    "pees": state.activity.Today.pees + 1
                }
            }
        }

    }
    return state
}

function buildingStats(state = {
    current: {
        label: "Current Stats",
        items: [{
            type: "energy",
            title: "6 Mega Watts of Energy",
            lineOne: "currently being used in the building",
            lineTwo: ""
        },
        {
            type: "people",
            title: "431 People",
            lineOne: "currently in the building",
            lineTwo: ""
        }]
    },
    activity: {
        "stairs": 483,
        "pees": 3042,
        "cups": 527
    }
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

function addVisible(state = false, action) {
    if (action.type === TOGGLE_ADD) {
        return !state
    }
    if (action.type === HIDE_ADD) {
        return false
    }
    return state
}

function leaderBoard(state = {
    Me: 45,
    "Michael Bell": 51,
    "Gina Curry": 20,
    "Bertha	Hansen": 7,
    "Ernesto Pearson": 38,
    "Stella	Chambers": 19,
    "Mark Bass": 3
}, action) {
    if (action.type === ADD_POINTS) {
        return {...state, Me: state.Me + action.points}
    }
    return state
}

const rootReducer = combineReducers({
    addVisible,
    user,
    buildingStats,
    view,
    leaderBoard
})

export default rootReducer