import { ADD_TO_FAVORITE_LIST, REMOVE_FROM_FAVORITE_LIST } from '../actions/type'

const INIT_STATE = {
    favoriteList : [],
    addColor: 'red',
    removeColor: 'gray'
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {

        case ADD_TO_FAVORITE_LIST: 
            return { ...state, favoriteList: action.payload, addColor}

        case REMOVE_FROM_FAVORITE_LIST:
            return {
                ...state,
                favoriteList: state.filter(item => item.id !== action.payload.id),
                removeColor
            }

        default:
            return state
    }
}