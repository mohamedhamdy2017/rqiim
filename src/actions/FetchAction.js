import { IS_FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from './type'


export const fetchingData = () => {
    return async (dispatch) => {
            dispatch({type: IS_FETCHING})
    const response = await fetch('https://young-caverns-57308.herokuapp.com/')
    const result = await response.json()
    if(result) {
        dispatch({type: FETCHING_SUCCESS, payload: result})
    } else {
        dispatch({type: FETCHING_FAILED})
    }
   }  
}