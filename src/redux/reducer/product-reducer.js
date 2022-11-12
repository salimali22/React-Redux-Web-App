import { ActionType } from "../constant/action-type"

const initialState = {
    product: []
    
}
export const productReducer = (state = initialState, action)=>{
        switch(action.type){
            case ActionType.ALL_PRODUCTS:
                return {
                    ...state,
                    product:action.payload,
                };
            default:
                return state;
        }
}

export const selectedReducer = (state = {}, action)=>{
    switch(action.type){
        case ActionType.SELECTED_PRODUCTS:
            return {
                ...state,
                selected:action.payload,
            };

        case ActionType.REMOVE_PRODUCTS:
                return {
                    ...state,
                    selected: {}
                };
        default:
            return state;
    }
}