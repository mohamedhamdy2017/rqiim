import { ADD_TO_FAVORITE_LIST, REMOVE_FROM_FAVORITE_LIST, DATA, SAVA_DATA, RETRIVE_DATA } from './type'

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