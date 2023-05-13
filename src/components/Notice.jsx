import React, { Component } from 'react';
import { StyleSheet, View, } from 'react-native';
import { MarqueeHorizontal } from 'react-native-marquee-ab';

export default class Notice extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <MarqueeHorizontal
                        textList={[
                            { label: '1', value: '该去么，' },
                            { label: '2', value: '去何处，' },
                            { label: '3', value: '又如何去。' },
                        ]}
                        speed={60}
                        width={250}
                        height={50}
                        direction={'left'}
                        separator={30}
                        reverse={false}
                        bgContainerStyle={{ backgroundColor: '#bbdefe' }}
                        textStyle={{ fontSize: 16, color: 'black' }}
                        onTextClick={(item) => {
                            alert('' + JSON.stringify(item));
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        width: 300,
        height: 50,
        backgroundColor: '#bbdefe',
        borderRadius: 25,
        paddingHorizontal: 25
    }
})