import { StyleSheet, View, Button, Dimensions, Text, TouchableOpacity } from 'react-native'
import * as React from 'react';
import Toast from 'react-native-root-toast';
import { Camera, CameraType } from 'expo-camera';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SecondTest = ({ navigation }) => {
    const [type, setType] = React.useState(CameraType.back);





    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={styles.text}>
                    题目
                </Text>
                <Text style={styles.textBody}>
                    这是一段描述性的文本{'\n'}
                    这是一段描述性的文本{'\n'}
                    这是一段描述性的文本{'\n'}
                    这是一段描述性的文本{'\n'}
                </Text>
            </View>

            <TouchableOpacity
                style={styles.answer}
                activeOpacity={0.8}
                onPress={null}
            >
                <Text style={{ color: 'white' }}>
                    点击作答
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SecondTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        width: screenWidth - 100,
        minHeight: screenHeight / 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
    },

    text: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 10,
    },
    textBody: {
        fontWeight: 'bold',
        fontSize: 12,
        margin: 10,
    },
    answer: {
        backgroundColor: '#097ef2',
        borderRadius: (screenWidth - 230) / 2,
        width: screenWidth - 230,
        height: screenWidth - 230,
        alignItems: 'center',
        justifyContent: 'center',
    },
})