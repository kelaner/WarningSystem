import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import * as React from 'react'
import * as echarts from 'echarts/core';
import { GridComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { RadarChart } from 'echarts/charts';
import { SVGRenderer, SkiaChart } from '@wuba/react-native-echarts';

echarts.use([SVGRenderer, LineChart, GridComponent, RadarChart, LegendComponent, TitleComponent]);

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ReportScord = ({ navigation }) => {
    const skiaRef = React.useRef(null);
    React.useEffect(() => {
        const option = {
            radar: {
                indicator: [
                    { name: 'Sales', max: 50000 },
                    { name: 'Administration', max: 50000 },
                    { name: 'Information Technology', max: 50000 },
                    { name: 'Customer Support', max: 50000 },
                    { name: 'Development', max: 50000 },
                    { name: 'Marketing', max: 50000 }
                ]
            },
            series: [
                {
                    type: 'radar',
                    data: [
                        {
                            value: [42000, 25000, 40000, 10000, 35000, 30000]
                        },
                    ]
                }
            ]
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
            <View style={styles.box}>
                <Text style={styles.title}>测试分数：
                    <Text style={styles.content}>90</Text>
                </Text></View>
            <View style={styles.box}>
                <Text style={styles.title}>测试信息：
                    <Text style={styles.content}>测试通过</Text>
                </Text></View>
            <View style={styles.box}>
                <Text style={styles.title}>建议：
                    <Text style={styles.content}>继续努力</Text>
                </Text>
            </View>
        </View>
    )
}

export default ReportScord

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        width: screenWidth - 100,
        alignItems: 'center',
        marginBottom: 5,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        marginRight: 5,
        fontSize: 16,
    },
    content: {
        fontSize: 16,
    },
})