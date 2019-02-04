import { IS_FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from './type'


export const fetchingData = () => {
    return async (dispatch) => {
            dispatch({type: IS_FETCHING})
    const response = await fetch('https://young-caverns-57308.herokuapp.com/')
    const result = await response.json()
    console.log(result)
    //return {result}
}
}

//  const fetchingSuccess = (dispatch, appData) => {
//     dispatch ({
//         type: FETCHING_SUCCESS,
//         payload: appData
//     })
// }

//  const fetchingFailed = (dispatch) => {
//     dispatch({
//         type: FETCHING_FAILED,
//     })
// }
