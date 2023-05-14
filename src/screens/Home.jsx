import { StyleSheet, Image, View, Text, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'

import Carousel from '../components/Carousel'
import Notice from '../components/Notice'
import Discuss from '../components/Discuss'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
                <Carousel />
            </View>
            <View style={styles.notice}>
                <Notice />
            </View>
            <View style={styles.line}></View>
            <View style={styles.discussDiv}>
                {/* <Text>AAAA</Text> */}
                <Discuss />
            </View>
        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    carousel: {
        minHeight: 200,
        marginTop: 33
    },
    notice: {
        minHeight: 50,
        marginBottom: 13
    },
    line: {
        width: screenWidth - 55,
        height: 1,
        backgroundColor: '#ccc',
    },
    discussDiv: {
        width: screenWidth - 25,
        borderRadius: 25,
        maxHeight: screenHeight - 390,
    }
})
