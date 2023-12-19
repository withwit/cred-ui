import {
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import styles from '../styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  Camera,
  CameraDevice,
  getCameraDevice,
  getCameraFormat,
  useCameraDevices,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';

export default function BottomBarItems() {
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    requestPermission();
  }
  const scan = () => {
    openbbar.value = openbbar.value == true ? false : true;
  };
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });
  const devices = useCameraDevices();
  const device: CameraDevice = getCameraDevice(devices, 'back');
  const openbbar = useSharedValue(false);
  const openclosestyle = useAnimatedStyle(() => ({
    top: openbbar.value == true ? withTiming('0%') : withTiming('80%'),
  }));

  return (
    <View style={[styles.bottom_main]}>
      <Animated.View style={[styles.bottombarItems, openclosestyle]}>
        <TouchableNativeFeedback onPress={scan}>
          <View style={{alignItems: 'center', top: '4%'}}>
            <View
              style={{
                width: 100,
                height: 70,
                // backgroundColor: 'green',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{transform: [{scale: 0.2}]}}
                source={require('../assets/scan.png')}
              />
            </View>
            <Text style={{color: '#000'}}>SCAN & PAY</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={scan}>
          <View style={{alignItems: 'center', top: '-2.5%'}}>
            <View
              style={{
                width: 100,
                height: 100,
                // backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={[
                  {
                    transform: [{scale: 0.3}],
                  },
                ]}
                source={require('../assets/profile.png')}
              />
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000',
              }}>
              ANMOL SAHU
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={scan}>
          <View style={{alignItems: 'center', top: '2%'}}>
            <View
              style={{
                width: 100,
                height: 80,
                // backgroundColor: 'cyan',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{transform: [{scale: 0.21}]}}
                source={require('../assets/contacts.png')}
              />
            </View>
            <Text style={{color: '#000'}}>PAY CONTACTS</Text>
          </View>
        </TouchableNativeFeedback>
        <Camera
          device={device}
          isActive={openbbar.value}
          style={styles.camera}
          codeScanner={codeScanner}
        />
      </Animated.View>
      <Animated.View style={[styles.bottombar, openclosestyle]} />
    </View>
  );
}
