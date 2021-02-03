import React, { createContext, useContext , useReducer } from 'react';

//prepare the dataLayer
export const StateContext = createContext();

// Wrap the main application and provide the datalayer to every component
export const StateProvider = ({ reducer, initialState, children }) =>{
    return(
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
    
}

// export every information from the dataLayer
export const useStateValue = () => useContext(StateContext);

// export default StateProvider