import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Index = ({ navigation }) => {
    return (
        <View>
            <Text>User</Text>
            <Button
                title="跳到首页"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Index

const styles = StyleSheet.create({})