import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Report = ({ navigation }) => {
    return (
        <View>
            <Text>Report</Text>
            <Button
                title="跳到首页"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}

export default Report

const styles = StyleSheet.create({})