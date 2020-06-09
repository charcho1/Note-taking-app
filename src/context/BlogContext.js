//import React, {useReducer} from 'react'; no jsx after we refactored it
import createDataContext from './createDataContext';
//const BlogContext = React.createContext(); --> we can comment out because importing createdatacontext
//BlogContext is an obj which will move info from BPP to blog list
const blogReducer = (state,action) => {
    //reducer gets 2 arguments: state and action. 
    /*we switch: depending on the type that action has, we will 
    make some cases. If type is add_blogpost, we will return
    a new array with the current value of state, and we will add
    a new title prop with blog post
    then if these conditions arent met, we just leave it as is (return state)

    */
    switch (action.type) {
        case 'delete_blogpost':
            return state.filter ((blogPost) => blogPost.id!==action.payload) 
            //filter function: iterate thru all elem of state array and run child function ((BP)=>)we pass in 
            //if the function returns true, we will display a new state array
            // if false, reject
            //receive blogpost obj and check if bp.id is not equal to action.payload
            //payload is the id of the blogpost we want to delete
            //if child function true (ie bpid != action.payload), we will return a NEW state array with a new set of BP
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random()*9999), 
                title:action.payload.title,
                content:action.payload.content}]
             // return all the states thus far and add this new prop of title which is inherited from the createscreen
             //and with content inherited from createscreen
             //now all items (in index screen) have an id
        default:
                return state;
    }
}
const addBlogPost = (dispatch) => {
    return (title,content, callback) => {
    dispatch ({type:'add_blogpost', payload: {title, content}});
    callback();}}
    //this callback is needed for the callback function which auto navigates user back to index screen once blog is saved
/*export const BlogProvider = ({children}) => {
   
   const [blogPosts, dispatch] = useReducer(blogReducer,[]);
   //above: 1st arg is the reducer function we will use, 2nd is initial state object (blank array)
    // update the 2nd function to dispatch
    const addBlogPost = () => {
        dispatch ({type:'add_blogpost'});
    }
    //above: we make a helper function that runs dispatch (of add_blogpost) which is called when addBlogPost is called
   ;--> we can comment out because importing createdatacontext */
const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch ({type:'delete_blogpost', payload:id})//id: is the id of post to delete assigned to item (back in indexscreen)
    }//id is received as an argument received
}




//above, it's the same program as below but using reducer
/*import React, {useState} from 'react';
const BlogContext = React.createContext();
//BlogContext an obj which will move info from BPP to blog list

export const BlogProvider = ({children}) => {
    /*here, we are passing down the value of 5 from BPP parent to 
    the child (indexscreen) which is why we import BC in index screen 
   const [blogPosts, dispatch] = useReducer(blogReducer,[]); gives default value of empty array
   const addBlogPost =() => {
       setBlogPosts([...blogPosts, {title:`Blog Post #${blogPosts.length+1}`}]);
   } ,
   
   //Above: this ...blogposts means create a new array and take all the existing blogposts into this array
   {title:blogpost}: means add a new blogpost onto the above array
   This old + new list of blog posts will then be passed down as data:blogposts

   ;
   return (<BlogContext.Provider value={{data:blogPosts, //addBlogPost <-this is what we are passing down:addBlogPost<- this is the addblgopost function above}}>
        {children}
    </BlogContext.Provider>);
};This value = {{}} passes down information called data:blogposts etc and gets called when usecontext(context) is evoked in indexscreen.js
we are passing down multiple args: data (which is defined as blogposots) and addblogpost (defined as addblogpost function above)
*/


//export default BlogContext; //--> we can comment out because importing createdatacontext
//instead, we destructure out createdatacontext the rpoducts of createdatacontext.js = context and provider
//1st arg is our reducer, then an object that contains all the different actions we want
export const {Context,Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost},
    []
    )