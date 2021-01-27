import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';

import {Home, Restaurant} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () =>{
    return (
        <Tab.Navigator
           
        >
            <Tab.Screen 
                name="Home"
                component={Home}
            />
             <Tab.Screen 
                name="Restaurant"
                component={Restaurant}
            />
        </Tab.Navigator>
    )
}

export default Tabs;
