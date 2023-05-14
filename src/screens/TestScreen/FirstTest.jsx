import { StyleSheet,  View, Button } from 'react-native'
import React from 'react'

const FirstTest = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button
                title="返回测试"
                onPress={() => navigation.navigate('Test')}
            />
        </View>
    )
}

export default FirstTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})