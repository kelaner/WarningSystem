import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Test = ({ navigation }) => {
    return (
        <View>
            <Text>Test</Text>
            <Button
                title="跳到首页"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Test

const styles = StyleSheet.create({})