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
  const openbbar = useSharedValue(false);
  const scan = () => {
    openbbar.value = openbbar.value == true ? false : true;
  };

  const openclosestyle = useAnimatedStyle(() => ({
    top: openbbar.value == true ? withTiming('75%') : withTiming('170%'),
  }));

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });
  const devices = useCameraDevices();
  const device = getCameraDevice(devices, 'back');

  return (
    <>
      <Animated.View style={[styles.bottombarItems, openclosestyle]}>
        <TouchableNativeFeedback onPress={scan}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{transform: [{scale: 0.3}], top: 10}}
              source={require('../assets/scan.png')}
            />
            <Text style={{}}>SCAN & PAY</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={scan}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={[
                {
                  transform: [{scale: 0.3}],
                },
                {top: '20%'},
              ]}
              source={require('../assets/profile.png')}
            />
            <Text
              style={{
                left: '0%',
                bottom: '0%',
                fontWeight: 'bold',
              }}>
              ANMOL SAHU
            </Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={scan}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'cyan',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{transform: [{scale: 0.3}], top: '20%'}}
              source={require('../assets/contacts.png')}
            />
            <Text style={{}}>PAY CONTACTS</Text>
          </View>
        </TouchableNativeFeedback>
      </Animated.View>
      <Camera
        device={device}
        isActive={true}
        style={styles.camera}
        codeScanner={codeScanner}
      />
      <Animated.View style={[styles.bottombar, openclosestyle]} />
    </>
  );
}
