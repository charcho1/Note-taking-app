import React, {useContext} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext'
import { EvilIcons } from '@expo/vector-icons';
const ShowScreen =({navigation}) =>
{
    const {state}=useContext(Context);
    //^ imports context from blogcontext
    const blogPost=state.find((blogPost)=>blogPost.id ===navigation.getParam('id'))
    //find is called with each blogpost and when this case is true, it will assign the post where this is true to the const blog post
   //after the blogpost with blogpost.id ==navigationgpid is found, we will assign the const to it and then show it on the screen
   //via blogpost.title 
   //navigation prop received in {navigation}.
   // THen put a function called geetparam with a sring of id to receive the id from blog context
    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );

};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
      headerRight: (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Edit', { id: navigation.getParam('id') })
          }
        >
          <EvilIcons name="pencil" size={35} />
        </TouchableOpacity>
      )
    };
  };// we did this ^ in indexscreen

const styles = StyleSheet.create({


});
export default ShowScreen


