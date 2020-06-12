//this file is the common denominator used to create and edit form. It will be imported in both create and edit screens
//inside those respective screens, it will be customized

import React, {useState} from 'react';//use UseContext to inherit the value of context from BC
import {TextInput, StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';

const BlogPostForm =({onSubmit, initialValues}) => //we receive onsubmit, which is called when button is pressed, receiving title, and content which
//is defined right below
    {  const [title, setTitle] = useState(initialValues.title);
        const [content, setContent] = useState(initialValues.content);
      
        return (
          <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput
              style={styles.input}
              value={content}
              onChangeText={text => setContent(text)}
            />
            <Button title="Save note" onPress={() => onSubmit(title, content)} />
          </View>
        );
      };//the above sets the value of the title and content defined above.
// on change text, receive "text" and run the settitle/content functions which will update the text displayed with the "text"
//onpress: you add blogpost with title and content passed in, AND also navigates to index automatically
BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
} //if no data is passed in, we define default props as title empty string and content empty string
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
export default BlogPostForm

