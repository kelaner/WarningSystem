import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodosScreen from '../screens/Todos'

const Stack = createNativeStackNavigator();

const TodosStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Todos'
                component={TodosScreen}
                options={{
                    title: '待办',
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    )
}

export default TodosStack

const styles = StyleSheet.create({})