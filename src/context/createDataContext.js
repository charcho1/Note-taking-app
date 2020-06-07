//this is going to automate the process we did in the blogcontext.js

import React, {useReducer} from 'react';
export default (reducer, actions, initialState) => {
//needs to receive reducer, helper functions iwth a dispatch , initial state of empty array of the reducer function
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer, initialState);//passing in these 2 args
        //actions === {addBLogPost: (dispatch) => {return() => {}}} we call addblogpost function pass dispatch on it which will return this other function
        //this whole thing will be set on boundactions and pass it down the value prop
        const boundActions = {};
        for (let key in actions) {
            boundActions [key]= actions[key](dispatch);
        }
        return <Context.Provider value={{state,...boundActions}}>
            {children}
        </Context.Provider>
    }
    return {Context, Provider}
}
