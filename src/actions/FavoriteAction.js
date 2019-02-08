import { ADD_TO_FAVORITE_LIST, REMOVE_FROM_FAVORITE_LIST, SAVE_DATA } from './type'

export const addToFavoriteList = (item) => {
    return (dispatch) => {
            dispatch({type: ADD_TO_FAVORITE_LIST, payload: item})       
    }
}


export const removeFromFavoriteList = () => {
    return (dispatch) => {
        dispatch({type: REMOVE_FROM_FAVORITE_LIST})
    }
}

export const saveData = () => {
    return (dispatch) => {
        dispatch({type: SAVE_DATA})
    }
}