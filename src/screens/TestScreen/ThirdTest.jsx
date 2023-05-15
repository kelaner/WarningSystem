import { Camera } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Permissions } from 'expo';

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
    const [ratio, setRatio] = useState('16:9');
    const cameraRef = useRef(null);

    // 获取权限并启动摄像头
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            Camera.requestMicrophonePermissionsAsync()
            
            setHasPermission(status === 'granted');
            if (status !== 'granted') {
                await Permissions.requestAsync(Permissions.RECORD_AUDIO);
              }
        })();
    }, []);

    // 切换摄像头
    const handleCameraType = () => {
        setCameraType(
            cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        );
    };

    // 录制视频
    const handleRecording = async () => {
        if (cameraRef.current) {
            try {
                const { uri } = await cameraRef.current.recordAsync();
                console.log('Video recorded at', uri);
            } catch (error) {
                console.error(error);
            }
        }
    };

    // 停止录制视频
    const handleStopRecording = () => {
        if (cameraRef.current && cameraRef.current.isRecording) {
            cameraRef.current.stopRecording();
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Camera
                ref={cameraRef}
                style={{ flex: 1 }}
                type={cameraType}
                ratio={ratio}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={handleCameraType}>
                    <Text style={{ fontSize: 18, margin: 10, color: 'white' }}>
                        Flip
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPressIn={handleRecording}
                    onPressOut={handleStopRecording}
                >
                    <View
                        style={{
                            borderWidth: 2,
                            borderRadius: 50,
                            borderColor: 'white',
                            height: 50,
                            width: 50,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 25,
                        }}
                    >
                        {cameraRef.current && cameraRef.current.isRecording ? (
                            <View
                                style={{
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    borderColor: '#ff0000',
                                    height: 40,
                                    width: 40,
                                    backgroundColor: '#ff0000',
                                }}
                            />
                        ) : (
                            <View
                                style={{
                                    borderWidth: 2,
                                    borderRadius: 50,
                                    borderColor: 'white',
                                    height: 40,
                                    width: 40,
                                }}
                            />
                        )}
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
