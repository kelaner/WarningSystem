import { StyleSheet, Image, View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'

import Carousel from '../components/Carousel'
import Notice from '../components/Notice'



const Home = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Carousel />
            <Notice />

        </View>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
})
