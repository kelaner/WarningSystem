import * as React from 'react';
import { StyleSheet, View, } from 'react-native';
import { MarqueeHorizontal } from 'react-native-marquee-ab';
import MCIcons from '@expo/vector-icons/MaterialCommunityIcons'

export default class Notice extends React.Component {

    render() {
        return (
            <View style={styles.box}>
                <MCIcons
                    name={'bullhorn-variant-outline'}
                    size={20}
                />
                <MarqueeHorizontal
                    textList={[
                        { label: '1', value: '这是第一条公告' },
                        { label: '2', value: '这是第二条公告' },
                        { label: '3', value: '这是第三条公告' },
                    ]}
                    speed={60}
                    width={230}
                    height={50}
                    direction={'left'}
                    separator={30}
                    reverse={false}
                    bgContainerStyle={{ backgroundColor: '#bbdefe' }}
                    textStyle={{ fontSize: 16, color: 'black' }}
                    onTextClick={(item) => {
                        alert(JSON.stringify(item.value));
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    box: {
        width: 300,
        height: 50,
        backgroundColor: '#bbdefe',
        borderRadius: 25,
        paddingHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})