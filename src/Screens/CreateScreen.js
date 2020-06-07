import React, {useContext, useState} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet, Text, View, TextInput, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext'
const CreateScreen =({navigation}) =>{
    const [title,setTitle]= useState('')
    const [content,setContent]=useState('')

    return (
        <View>
            <Text style={styles.input} >Enter Title:</Text>
            <TextInput value={title} style={styles.input} onChangeText={(text)=>setTitle(text)}/>
            <Text style= {styles.label} >Enter Content:</Text>
            <TextInput value={content} style= {styles.label} onChangeText={(text)=>setTitle(text)}/>
        </View>
    );//the above sets the value of the title and content defined above. the text is a newly define dfunction where updated state will render new text 

};
const styles = StyleSheet.create({
    input: {
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    padding:5,
    margin:5,
},
    label:{
        fontSize:20,
        marginBottom:5,

    }
});
export default CreateScreen


