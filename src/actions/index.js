export const SET_VIEW = 'SET_VIEW'
export const setView = (view) => {
    return {
        type: SET_VIEW,
        view
    }
}

export const ADD_PEE = 'ADD_PEE'
export const addPee = () => {
    return {
        type: ADD_PEE
    }
}

export const ADD_CUP = 'ADD_CUP'
export const addCup = () => {
    return {
        type: ADD_CUP
    }
}

export const TOGGLE_ADD = 'TOGGLE_ADD'
export const toggleAdd = () => {
    return {
        type: TOGGLE_ADD
    }
}

export const HIDE_ADD = 'HIDE_ADD'
export const hideAdd = () => {
    return {
        type: HIDE_ADD
    }
}

export const ADD_POINTS = 'ADD_POINTS'
export const addPoints = (points) => {
    return {
        type: ADD_POINTS,
        points
    }
}