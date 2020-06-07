import React, {useContext} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext'
const ShowScreen =({navigation}) =>
{//navigation prop received. THen put a function called geetparam with a sring of id
    const {state}=useContext();
    const blogPost=state.find((blogPost)=>blogPost.id ===navigation.getParam('id'))
    //find is a helper function which finds instance where blgpost.id is equal to id and assigns it to const blogpost
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );

};
const styles = StyleSheet.create({


});
export default ShowScreen


