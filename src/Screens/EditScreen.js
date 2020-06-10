import React, {useState, useContext} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm"
const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);
 //select which blog post to edit

/*const [title, setTitle]= useState(blogPost.title) //the default value for the state is the title of the const blogpost above
const [content, setContent]= useState(blogPost.content)    */
return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop()); //the pop function returns the user back to the prev screen
      }}
    />
  );
};


        /*(
        <View>
            <Text>Edit Title:</Text>
            <TextInput value={title} onChangeText= {(newTitle)=>setTitle(newTitle) } />
        </View>
    );*/



const styles = StyleSheet.create({


});
export default EditScreen


