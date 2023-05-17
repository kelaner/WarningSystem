import { StyleSheet, View, Button, Dimensions, Text, TouchableOpacity } from 'react-native'
import * as React from 'react';
import Toast from 'react-native-root-toast';
import { Camera, CameraType } from 'expo-camera';
import { Video, ResizeMode } from 'expo-av';
import MCIcons from '@expo/vector-icons/MaterialCommunityIcons';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SecondTest = ({ navigation }) => {
    const [type, setType] = React.useState(CameraType.front);
    const [cameraSwitch, setCameraSwitch] = React.useState(false);
    const [videoSwitch, setVideoSwitch] = React.useState(false);
    const [cameraShow, setCameraShow] = React.useState(true);
    const cameraRef = React.useRef(null);
    const videoRef = React.useRef(null);
    const [auri, setUri] = React.useState(null);

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
                console.log('开始录像');
                const { uri } = await cameraRef.current.recordAsync();
                // setUri(await cameraRef.current.recordAsync());
                console.log('Video recorded at', uri);
                await Toast.show("录制成功");
                await setUri(uri);
                await console.log(auri);
                if (auri === null) {
                    await Toast.show("录制失败");
                }

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
            Toast.show('录制出错');
            console.log('录制出错')
        }
    };

    //录制开关
    const checkoutCameraSwitch = () => {
        if (cameraSwitch === false) {
            handleRecording();
            setCameraSwitch(true);
        } else if (cameraSwitch === true) {
            handleStopRecording();
            setCameraSwitch(false);
        }
    }

    //录制回看开关
    const checkoutVideoSwitch = () => {
        if (auri === null) {
            Toast.show('题目未作答');
        } else if (videoSwitch === false) {
            Toast.show("回看");
            setCameraShow(false);
            setVideoSwitch(true);
        } else if (videoSwitch === true) {
            Toast.show("取消回看");
            setVideoSwitch(false);
        }
    }

    //相机预览界面开关
    const showCamera = async () => {
        if (cameraShow === false) {
            Toast.show("Enable Preview");
            setVideoSwitch(false);
            setCameraShow(true);
        } else if (cameraShow === true) {
            setCameraShow(false);
        }
    }

    //相机预览界面
    const cameraPlayer = (
        <Camera
            style={styles.camera}
            type={type}
            ref={cameraRef} >
        </Camera>
    )

    const cameraPlayerHide = (
        <Camera
            style={styles.cameraHide}
            type={type}
            ref={cameraRef} >
        </Camera>
    )


    //回看视频界面
    const videoPlayer = (
        <Video
            ref={videoRef}
            style={{
                width: 200,
                height: 200
            }}
            source={{ uri: auri }}
            useNativeControls={true}
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            shouldPlay
        >
        </Video>
    )


    //相机前后置切换开关
    const toggleType = (
        <TouchableOpacity
            style={styles.defaultButton}
            activeOpacity={0.8}
            onPress={toggleCameraType}>
            <Text style={{ color: 'white' }}>
                <MCIcons name='camera-flip-outline' size={25} />
            </Text>
        </TouchableOpacity>
    )



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

            {videoSwitch ? videoPlayer : null}
            {cameraShow ? cameraPlayer : cameraPlayerHide}

            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity
                    style={cameraSwitch ? styles.onButton : styles.defaultButton}
                    activeOpacity={0.8}
                    onPress={checkoutCameraSwitch}>
                    <Text style={{ color: 'white' }}>
                        <MCIcons name='camera-outline' size={25} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={auri === null ? styles.offButton :
                        videoSwitch ? styles.onButton :
                            styles.defaultButton}
                    activeOpacity={0.8}
                    onPress={checkoutVideoSwitch}>
                    <Text style={{ color: 'white' }}>
                        <MCIcons name='camera-image' size={25} />
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={cameraShow ? styles.defaultButton : styles.offButton}
                    activeOpacity={0.8}
                    onPress={showCamera}>
                    <Text style={{ color: 'white' }}>
                        <MCIcons name={videoSwitch ? 'eye-off-outline' : 'eye-outline'} size={25} />
                    </Text>
                </TouchableOpacity>

                {cameraShow ? toggleType : null}

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
    cameraHide: {
        width: 150,
        height: 200,
        position: 'absolute',
        top: -1000,
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
    defaultButton: {
        backgroundColor: '#097ef2',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    offButton: {
        backgroundColor: '#333333',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    onButton: {
        backgroundColor: '#f1504e',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
})