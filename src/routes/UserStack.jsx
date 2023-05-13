import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserScreen from '../screens/User'

const Stack = createNativeStackNavigator();

const UserStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='User'
                component={UserScreen}
                options={{
                    title: '账户',
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    )
}

export default UserStack

const styles = StyleSheet.create({})