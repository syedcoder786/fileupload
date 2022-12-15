import { IMAGE_DATA, FETCH_IMAGES } from '../actions/types';

const initialState = {
    item:{},
    items:[]
}
export default function(state = initialState, action){
    switch( action.type ){
        case IMAGE_DATA:
        return {
            ...state,
            item:action.payload
        };
        case FETCH_IMAGES:
        return {
            ...state,
            items:action.payload
        };
        default:
        return state;
    };
}