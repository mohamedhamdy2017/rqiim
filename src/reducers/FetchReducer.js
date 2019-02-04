import { IS_FETCHING, FETCHING_SUCCESS, FETCHING_FAILED } from '../actions/type'

const INIT_STATE = { appData:[], loading: false, error: '' }

export default (state = INIT_STATE, action) => {
    switch(action.type){
        
        case IS_FETCHING:
            return { ...state, loading: true}
        case FETCHING_SUCCESS : 
            return { ...state, appData: action.payload, loading: false, error: ''}
        case FETCHING_FAILED :
            return { ...state, error: 'Loading Data Failed'}
        default:
            return state
    }
}