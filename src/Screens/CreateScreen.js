import React, {useContext} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet } from 'react-native';
import {Context} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'
const CreateScreen =({navigation}) =>{
    /*const [title,setTitle]= useState('')
    const [content,setContent]=useState('')*/
    const {addBlogPost}= useContext(Context)
    return <BlogPostForm onSubmit ={(title, content) => 
        addBlogPost (title,content,()=>navigation.navigate('Index'))} />}
        //^we will pass a prop called onsubmit which is a function evoked when submitted. 
        //this function passes in title and content that the user inputs and also navigates back to index
    const styles = StyleSheet.create({});

        /*(<View>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={(text)=>setTitle(text)}/>
            <Text style= {styles.label} >Enter Content:</Text>
            <TextInput value={content} style= {styles.input} onChangeText={(text)=>setContent(text)}/>
            <Button title="Add Blog Post" onPress={()=> {
                addBlogPost(title,content, () => {;
                navigation.navigate('Index')})}} />
        </View>
    );} //the above sets the value of the title and content defined above.
    // on change text, receive "text" and run the settitle/content functions which will update the text displayed with the "text"
    //onpress: you add blogpost with title and content passed in, AND also navigates to index automatically
;
const styles = StyleSheet.create({
    input: {
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    padding:5,
    marginBottom:15,
},
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5,

    }
});*/
export default CreateScreen


