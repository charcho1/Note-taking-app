//this is going to automate the process we did in the blogcontext.js (passind down the addblogpost process)

import React, {useReducer} from 'react';
export default (reducer, actions, initialState) => {
//needs to receive reducer, helper functions iwth a dispatch (aka the diff actions which need to be passed down),
// and an initial state (= empty array of the reducer function
    const Context = React.createContext();
    const Provider = ({children}) => {
        const [state,dispatch] = useReducer(reducer, initialState);//passing in these 2 args
        
        //actions === {addBLogPost: (dispatch) => {return() => {}}} we call addblogpost function pass dispatch on it which will return this other function

        const boundActions = {};
        for (let key in actions) {
            boundActions [key]= actions[key](dispatch);
        } //this above thing generates an action (add/edit/delete blog post) depending on the key provided
            //this whole thing will be set on boundactions and pass it down the value prop
        return <Context.Provider value={{state,...boundActions}}>
            {children}
        </Context.Provider>
    }
    /*A contextprovider: passes information down to children. 
    Value: the information that is passed down to children. We will pass down state as well as ...boudnactions
    
    App will render custom component, and will pass down a prop called children in the process
    since children (aka <text>hi there) is wrapped around <CustomComponent> in app.js. 
    The <customcomponent> is what <Context.Provider> is

    context.provider: alows components to adopt changes to context. 
    So the accepted value will be state and obund actions*/
    return {Context, Provider}
}
