import React, {useContext} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';
const IndexScreen =() =>
{
    const {data, addBlogPost} = useContext(BlogContext); //passing in the BC Context into a constant called value
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data = {data}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                return <Text>{item.title}</Text>}}
            />
           
        </View>
    );
    /*we cant do const value and text {value} because 
    we can't pass an object directly  as a react child */
};
const styles = StyleSheet.create({});
export default IndexScreen