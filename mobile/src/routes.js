import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Index from './pages/Index/Index.js';

const AppStack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>

                <AppStack.Screen name="Index" component = { Index } />
                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}