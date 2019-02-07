import { ADD_TO_FAVORITE_LIST, REMOVE_FROM_FAVORITE_LIST } from '../actions/type'


const INIT_STATE = {
    items : [],
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {

        case ADD_TO_FAVORITE_LIST: 
            return { ...state, items: [ ...state.items, action.payload ] }

        case REMOVE_FROM_FAVORITE_LIST:
            return {
                ...state,
                items: state.items.filter((item) => {
                  return item.id !== action.item
            })
        }
                
        default:
            return state
    }
}