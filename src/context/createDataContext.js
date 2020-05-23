//this is going to automate the process we did in the blogcontext.js

import React, {useReducer} from 'react';
export default (reducer, actions, initialState) => {
//needs to receive reducer, helper functions iwth a dispatch , initial state of empty array of the reducer function
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer, initialState);//passing in these 2 args
        return <Context.Provider value={{state}}>
            {children}
        </Context.Provider>
    }
    return {Context, Provider}
}
