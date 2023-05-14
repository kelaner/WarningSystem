import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import HomeScreen from './HomeStack'
import Report from './ReportStack'
import Test from './TestStack'
import Todos from './TodosStack'
import User from './UserStack'

const Tab = createBottomTabNavigator();

const index = () => {
    return (
        <Tab.Navigator
            initialRouteName="测试"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: "black",
                tabBarIcon: ({ focused, size, color }) => {
                    let iconName
                    if (route.name === '首页') {
                        iconName = focused ? 'home' : 'home-outline'
                    }
                    else if (route.name === '报告') {
                        iconName = focused ? 'document-text' : 'document-text-outline'
                    }
                    else if (route.name === '测试') {
                        iconName = focused ? 'infinite' : 'infinite-outline'
                    }
                    else if (route.name === '待办') {
                        iconName = focused ? 'document-attach' : 'document-attach-outline'
                    }
                    else if (route.name === '账户') {
                        iconName = focused ? 'person' : 'person-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}></Ionicons>
                },
            })}

        >
            <Tab.Screen
                name="首页"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 13,
                    },
                }}
            />
            <Tab.Screen
                name="报告"
                component={Report}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 13,
                    },
                }}
            />
            <Tab.Screen
                name="测试"
                component={Test}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 13,
                    }
                }}
            />
            <Tab.Screen
                name="待办"
                component={Todos}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 13,
                    }
                }}
            />
            <Tab.Screen
                name="账户"
                component={User}
                options={{
                    headerShown: false,
                    tabBarLabelStyle: {
                        fontSize: 13,
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default index

const styles = StyleSheet.create({})