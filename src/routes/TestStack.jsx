import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestScreen from '../screens/Test'
import FirstTest from '../screens/TestScreen/FirstTest'
import SecondTest from '../screens/TestScreen/SecondTest'
import ThirdTest from '../screens/TestScreen/ThirdTest'

const Stack = createNativeStackNavigator();

const TestStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Test'
                component={TestScreen}
                options={{
                    title: '测试',
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name='FirstTest'
                component={FirstTest}
                options={{
                    title: '测试1',
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name='SecondTest'
                component={SecondTest}
                options={{
                    title: '测试2',
                    headerTitleAlign: "center",
                }}
            />
            <Stack.Screen
                name='ThirdTest'
                component={ThirdTest}
                options={{
                    title: '测试3',
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    )
}

export default TestStack

const styles = StyleSheet.create({})