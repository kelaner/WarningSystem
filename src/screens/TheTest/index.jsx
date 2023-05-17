import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export default function Index({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>选择测试类型</Text>
            <Button
                mode="contained-tonal"
                icon="alpha"
                style={styles.button}
                onPress={() => navigation.navigate('FirstTest')}>
                <Text style={styles.text}>测试1</Text>
            </Button>
            <Button
                mode="contained-tonal"
                icon="beta"
                style={styles.button}
                onPress={() => navigation.navigate('SecondTest')}>
                <Text style={styles.text}>测试2</Text>
            </Button>
            <Button
                mode="contained-tonal"
                icon="gamma"
                style={styles.button}
                onPress={() => navigation.navigate('ThirdTest')}>
                <Text style={styles.text}>测试3</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 24,
        margin: 30,
    },
    button: {
        margin: 4,
        backgroundColor: "#8acfac"
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
});
