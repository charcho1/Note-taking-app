import React, {useContext} from 'react';//use UseContext to inherit the value of context from BC
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'
const IndexScreen =({navigation}) =>
{
    const {data, addBlogPost} = useContext(Context); //passing in the BC Context into a constant called value
    return (
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data = {data}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})}>
                    <View style={styles.row}>
                        <Text style={styles.title}>{item.title}-{item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                            <Feather name="trash" style={styles.icon}/>
                            </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                    );
                }}
            />
           
        </View>
    ); //navigate has 2 args: 1st directs it to show screen and 2nd tells it to direct to the blog post with the id = item.id
    /*we cant do const value and text {value} because 
    we can't pass an object directly  as a react child */
};

IndexScreen.navigationOptions=()=>{
    return{
        headerRight:
             <TouchableOpacity onPress={({navigation})=>navigation.navigate('Create')}>
                 <Feather name="plus" size={30}/>
            </TouchableOpacity>
    }
//when indexscreen is about to be displayed by react navigation, it will call this function we assiend to navigationoptions
//this allows us to display header only on the indexscreen

}
const styles = StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        borderTopWidth:1,
        paddingHorizontal:10,
        borderColor:'gray'
    },
    title: {
        fontSize:18
    },
    icon: {
        fontSize:24
    },
});
export default IndexScreen


