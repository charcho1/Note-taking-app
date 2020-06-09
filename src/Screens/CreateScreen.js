import React, {useContext, useState} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext'
const CreateScreen =({navigation}) =>{
    const [title,setTitle]= useState('')
    const [content,setContent]=useState('')
    const {addBlogPost}= useContext(Context)
    return (
        <View>
            <Text style={styles.label} >Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={(text)=>setTitle(text)}/>
            <Text style= {styles.label} >Enter Content:</Text>
            <TextInput value={content} style= {styles.input} onChangeText={(text)=>setContent(text)}/>
            <Button title="Add Blog Post" onPress={()=> {
                addBlogPost(title,content, () => {;
                navigation.navigate('Index')})}} />
        </View>
    );//the above sets the value of the title and content defined above.
    // on change text, receive "text" and run the settitle/content functions which will update the text displayed with the "text"
    //onpress: you add blogpost with title and content passed in, AND also navigates to index automatically
};
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
});
export default CreateScreen


