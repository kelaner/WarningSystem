import { StyleSheet, View, Button, Dimensions, Text, TouchableOpacity } from 'react-native'
import * as React from 'react';
import { Audio } from 'expo-av';
import Toast from 'react-native-root-toast';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const FirstTest = ({ navigation }) => {

    const [recording, setRecording] = React.useState(null);
    const [audio, setAudio] = React.useState(null);

    async function startRecording() {
        try {
            console.log('正在获取权限');
            await Audio.requestPermissionsAsync();

            console.log('开始录音');
            const { recording } = await Audio.Recording.createAsync(
                Audio.RecordingOptionsPresets.HIGH_QUALITY
            );
            setRecording(recording);
            setAudio(recording);

            console.log('录音结束中');
        } catch (err) {
            console.error('录音失败', err);
        }
    }

    async function stopRecording() {
        console.log('录音结束中');
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('录音结束并存放在', uri);

        const { sound } = await Audio.Sound.createAsync({ uri });
        setAudio(sound);

    }


    function showToast() {
        if (audio == null) {
            Toast.show('题目未作答');
        } else {
            audio.playAsync();
        }
    }


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
                style={recording ? styles.on : styles.off}
                activeOpacity={0.8}
                onPress={recording ? stopRecording : startRecording}
            >
                <Text style={{ color: 'white' }}>
                    {recording ? '点击停止作答' : '点击语音作答'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.player, { backgroundColor: audio == null ? "gray" : "#097ef2" }]}
                onPress={() => showToast()}
            >
                <Text>播放录音</Text>
            </TouchableOpacity>

        </View>
    )
}

export default FirstTest

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
    off: {
        backgroundColor: '#097ef2',
        borderRadius: (screenWidth - 230) / 2,
        width: screenWidth - 230,
        height: screenWidth - 230,
        alignItems: 'center',
        justifyContent: 'center',
    },
    on: {
        backgroundColor: '#f1504e',
        borderRadius: (screenWidth - 230) / 2,
        width: screenWidth - 230,
        height: screenWidth - 230,
        alignItems: 'center',
        justifyContent: 'center',
    },
    player: {
        borderRadius: 10,
        width: screenWidth - 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})