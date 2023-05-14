import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as React from 'react'
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { SVGRenderer, SkiaChart } from '@wuba/react-native-echarts';

echarts.use([SVGRenderer, LineChart, GridComponent]);

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Report = ({ navigation }) => {
    const skiaRef = React.useRef(null);
    React.useEffect(() => {
        const option = {
            xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135],
                    type: 'line',
                },
            ],
        };

        let chart = null;
        if (skiaRef.current) {
            chart = echarts.init(skiaRef.current, 'light', {
                renderer: 'svg',
                width: screenWidth,
                height: 300,
            });
            chart.setOption(option);
        }
        return () => chart?.dispose();
    }, []);


    return (
        <View style={styles.container}>
            <Text>
                <SkiaChart ref={skiaRef} />;
            </Text>
            <Text style={styles.title}>
                历史记录队列
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ReportScord')}>
                <Text style={styles.text}>记录1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ReportScord')}
            >
                <Text style={styles.text}>记录2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ReportScord')}
            >
                <Text style={styles.text}>记录3</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Report

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        color: 'black',
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#d2f9d2',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 5,
    },
    text: {
        color: 'black',
        fontSize: 18,
    },
})