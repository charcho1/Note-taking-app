import React, {useContext, useEffect} from 'react';//use UseContext to inherit the value of context from BC
//useeffect runs the arrow function one time when comopnent shows up o n the screen
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'
//this screen shows list of blogposts to our users
const IndexScreen =({navigation}) =>
{   /*

    return (
        <View>
            <Text>Index Screen</Text>
            <Button title="Add Post" onPress = {addBlogPost} //when pressed, call the addblogpost function which is from BlogCOntext
            /> 
            <FlatList
                data = {state} //this is the array that will be displayed
                keyExtractor={(blogPost)=>blogPost.title} //each title will be a new key
                renderItem={({item})=>{ //return the item property and return item.title
                return<Text>{item.title}</Text>}}/> 
        </View>
    )*/
    const {state, deleteBlogPost, getBlogPosts} = useContext(Context); 

    useEffect(() => {
        getBlogPosts();
    
        const listener = navigation.addListener('didFocus', () => {
          getBlogPosts();
        });
    
        return () => {
          listener.remove();
        };
      }, []);
    //UseContext(context): receives the value of {Context} from blog context. This used to be value={{data:blogPosts, addBlogPost:addBlogPost}} until it got commented out
    // passing in the BC Context into a constant called value
    return (
        <View>

            <FlatList
                data = {state}
                keyExtractor={(blogPost)=>blogPost.title}
                renderItem={({item})=>{
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('Show',{id:item.id})} //id:item.id specifies the blogpost with which id we want to navigate to
                       >
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title}-{item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}// this allows trash to be tappable 
                                > 
                                <   Feather name="trash" style={styles.icon}/>
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

IndexScreen.navigationOptions=({navigation})=>{
    return{
        headerRight: (()=>
             <TouchableOpacity onPress={()=>navigation.navigate('Create')}>
                 <Feather name="plus" size={30}/>
            </TouchableOpacity>
        )}
//when indexscreen is about to be displayed by react navigation, it will call this function we assiend to navigationoptions
//this allows us to display header only on the indexscreen
//headerright: shows the thing on the right side of header

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


