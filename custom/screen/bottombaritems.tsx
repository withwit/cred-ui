import {
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  FlatList,
  SectionList,
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
import {useState} from 'react';

export default function BottomBarItems() {
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    requestPermission();
  }
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(`Scanned ${codes.length} codes!`);
    },
  });
  const devices = useCameraDevices();
  const device: any = getCameraDevice(devices, 'back');
  const openbbar = useSharedValue(false);
  const showcontacts = useSharedValue(false);
  const [cam, tooglecam] = useState(false);

  const openclosestyle = useAnimatedStyle(() => ({
    top: openbbar.value == true ? withTiming('0%') : withTiming('80%'),
  }));
  const openclosecontact = useAnimatedStyle(() => ({
    height:
      showcontacts.value == true
        ? withTiming('100%', {duration: 600})
        : withTiming('0%', {duration: 600}),
  }));
  const scan = () => {
    if (showcontacts.value == true) {
      showcontacts.value = false;
      tooglecam(true);
    } else {
      openbbar.value = openbbar.value == true ? false : true;
      if (cam == true) {
        tooglecam(false);
      } else {
        tooglecam(true);
      }
    }
  };
  const opencontacts = () => {
    if (cam == true) {
      tooglecam(false);
      showcontacts.value = true;
    } else {
      openbbar.value = openbbar.value == true ? false : true;
      showcontacts.value = showcontacts.value == true ? false : true;
    }
  };
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
        <TouchableNativeFeedback>
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
        <TouchableNativeFeedback onPress={opencontacts}>
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
          isActive={cam}
          style={[
            styles.camera,
            {width: cam == true ? styles.camera.width : 0},
          ]}
          codeScanner={codeScanner}
        />
        <Animated.FlatList
          style={[styles.list, openclosecontact]}
          data={[
            {key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.listitem}>{item.key}</Text>
          )}
        />
      </Animated.View>

      <Animated.View style={[styles.bottombar, openclosestyle]} />
    </View>
  );
}
