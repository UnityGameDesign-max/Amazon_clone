export const initialState = {
    basket:[],

};


//Selector
export const getBasketTotal =(basket) =>    
    basket?.reduce((amount, item) => item.price_dollar/1 + item.price_cent/100 + amount, 0);
    // Nami Angazi
    // I also don't know what happened 


const reducer = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],

            };
        default:
            return state; 
    }
};


export default reducer