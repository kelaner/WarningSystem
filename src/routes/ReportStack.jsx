import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ReportScreen from '../screens/Report'

const Stack = createNativeStackNavigator();

const ReportStack = () => {
  return (
<Stack.Navigator>
            <Stack.Screen
                name='Report'
                component={ReportScreen}
                options={{
                    title: '报告',
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
  )
}

export default ReportStack

const styles = StyleSheet.create({})