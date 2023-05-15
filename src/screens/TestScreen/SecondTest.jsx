import { StyleSheet, View, Button, Dimensions, Text, TouchableOpacity } from 'react-native'
import * as React from 'react';
import Toast from 'react-native-root-toast';
import { Camera, CameraType } from 'expo-camera';
import MCIcons from '@expo/vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SecondTest = ({ navigation }) => {
    const [type, setType] = React.useState(CameraType.front);
    const [cameraSwitch, setCameraSwitch] = React.useState(false);
    const cameraRef = React.useRef(null);
    // cameraRef.current = null;

    // 切换摄像头
    function toggleCameraType() {
        setType(current => (
            current === CameraType.back
                ? CameraType.front
                : CameraType.back
        ));
    }

    // 获取权限
    React.useEffect(() => {
        (async () => {
            try {
                console.log('正在获取权限');
                await Camera.requestCameraPermissionsAsync();
                await Camera.requestMicrophonePermissionsAsync();
                console.log('权限ok');
            } catch (err) {
                console.error('权限获取失败', err);
            }
        })();
    }, [])

    // 录制视频
    const handleRecording = async () => {
        if (cameraRef.current) {
            try {
                Toast.show('开始录像');
                console.log('开始录像')
                const { uri } = await cameraRef.current.recordAsync();
                console.log('Video recorded at', uri);
            } catch (error) {
                console.error(error);
            }
        }
    };

    // 停止录制视频
    const handleStopRecording = () => {
        if (cameraRef.current) {
            cameraRef.current.stopRecording();
            Toast.show('录像结束');
            console.log('录像结束')
        } else {
            Toast.show('结束条件未触发');
            console.log('结束条件未触发')
        }
    };

    const checkoutSwitch =  () => {
        if (cameraSwitch === false) {
             handleRecording();
            setCameraSwitch(true);
        } else if (cameraSwitch === true) {
            handleStopRecording();
            setCameraSwitch(false);
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

            <Camera type={type} ref={cameraRef}>
                <TouchableOpacity style={styles.camera}>
                </TouchableOpacity>
            </Camera>

            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity
                    style={cameraSwitch ? styles.on : styles.off}
                    activeOpacity={0.8}
                    onPress={() => checkoutSwitch()}>
                    <Text style={{ color: 'white' }}>
                        <MCIcons name='camera-outline' size={25} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cameraButton}
                    activeOpacity={0.8}
                    onPress={toggleCameraType}>
                    <Text style={{ color: 'white' }}>
                        <MCIcons name='camera-flip-outline' size={25} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cameraButton}
                    activeOpacity={0.8}
                    onPress={toggleCameraType}>
                    <Text style={{ color: 'white' }}>
                        <MCIcons name='camera-image' size={25} />
                    </Text>
                </TouchableOpacity>
            </View>
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
    camera: {
        width: 150,
        height: 200,
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
    cameraButton: {
        backgroundColor: '#097ef2',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    off: {
        backgroundColor: '#097ef2',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    on: {
        backgroundColor: '#f1504e',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
})