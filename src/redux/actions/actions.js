import { ActionType } from "../constant/action-type";

export const allproducts = (products)=>{
    return{
        type : ActionType.ALL_PRODUCTS,
        payload : products,
    }
}

export const selectedproducts = (products)=>{
    return{
        type : ActionType.SELECTED_PRODUCTS,
        payload : products,
    }
}
export const removeproducts = ()=>{
    return{
        type : ActionType.REMOVE_PRODUCTS,
    }
}