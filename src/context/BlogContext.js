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
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random()*9999), title: `Blog Post #${state.length+1}`}] // return all the states thus far and add this new prop
        default:
                return state;
    }
}
const addBlogPost = (dispatch) => {
    return () => {
    dispatch ({type:'add_blogpost'});}}
/*export const BlogProvider = ({children}) => {
   
   const [blogPosts, dispatch] = useReducer(blogReducer,[]);
   //above: 1st arg is the reducer function we will use, 2nd is initial state object (blank array)
    // update the 2nd function to dispatch
    const addBlogPost = () => {
        dispatch ({type:'add_blogpost'});
    }
    //above: we make a helper function that runs dispatch
   ;--> we can comment out because importing createdatacontext */
const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch ({type:'delete_blogpost', payload:id})//id: is the id of post to delete
    }
}




//above, it's the same program as below but using reducer
/*import React, {useState} from 'react';
const BlogContext = React.createContext();
//BlogContext an obj which will move info from BPP to blog list

export const BlogProvider = ({children}) => {
    /*here, we are passing down the value of 5 from BPP parent to 
    the child (indexscreen) which is why we import BC in index screen 
   const [blogPosts, setBlogPosts] = useState([]);
   const addBlogPost =() => {
       setBlogPosts([...blogPosts, {title:`Blog Post #${blogPosts.length+1}`}]);
   } //this means create a new array and take all the existing blogposts into this array
   ;
   return (<BlogContext.Provider value={{data:blogPosts, addBlogPost:addBlogPost}}>
        {children}
    </BlogContext.Provider>);
};
*/


//export default BlogContext; //--> we can comment out because importing createdatacontext
export const {Context,Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost},
    []
    )