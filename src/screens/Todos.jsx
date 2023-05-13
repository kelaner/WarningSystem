import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Todos = ({ navigation }) => {
    return (
        <View>
            <Text>Todos</Text>
            <Button
                title="跳到首页"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Todos

const styles = StyleSheet.create({})