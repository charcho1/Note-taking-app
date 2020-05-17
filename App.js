
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from './src/Screens/IndexScreen';
import {BlogProvider} from './src/context/BlogContext'; //{} imported because not default export on blog context
const navigator = createStackNavigator ({
  Index: IndexScreen
},{
  initialRouteName: 'Index', 
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});
//above lists all screens user can navigate to 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const App = createAppContainer(navigator);
export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>

};//so instead of exporting defaault createappcont(nav),
//we defined app as a variable and created a function that runs
//app as a child component of blogprovider. THus {children} from BContext is actually <ApP>