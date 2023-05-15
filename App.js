import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import React from 'react'
import Index from './src'

export default function App() {
    return (
        <RootSiblingParent>
            <NavigationContainer>
                <Index />
            </NavigationContainer>
        </RootSiblingParent>
    )
}