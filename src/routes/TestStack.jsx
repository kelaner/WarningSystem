import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TestScreen from '../screens/Test'

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
        </Stack.Navigator>
    )
}

export default TestStack

const styles = StyleSheet.create({})