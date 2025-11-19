
const initialState = {
    cartData: []
}
const cartReducer = (state, action) => {
    switch(action.type){
        case 'addToCart': 
        return {
            cartData: [...state.cartData, action.payload]
        }
        case 'removeCart': 
        return {
            ...state,
            cartData: state.cartData.filter((item) => {
               return item.id !== action.payload.id
            })
        }
        default: 
        return new Error(`${action.type} doesn't match`)
    }
}

export {initialState, cartReducer};