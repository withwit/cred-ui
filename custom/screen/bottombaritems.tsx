import {
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  ToastAndroid,
  Alert,
} from 'react-native';
import styles from '../styles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  Camera,
  getCameraDevice,
  useCameraDevices,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useState} from 'react';

export default function BottomBarItems(openbbbar: any) {
  const {hasPermission, requestPermission} = useCameraPermission();
  if (!hasPermission) {
    requestPermission();
  }
  const showAlert = (n: String, id: String) => {
    Alert.alert('', 'Scanned to pay ' + n + ' for UPI:\n' + id, [], {
      cancelable: true,
      // onDismiss: () => tooglecam(true),
    });
  };
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      console.log(isscaned);
      if (isscaned == true) {
        openbbar.value = false;
        tooglecam(false);
        return;
      }
      tooglescan(true);
      tooglecam(false);
      openbbar.value = false;
      const s = codes[0].value;
      const name = s?.indexOf('&pn=') ? s?.indexOf('&pn=') : 0;
      if (name == -1) {
        ToastAndroid.showWithGravity(
          "   It's not what i think it is.    \n                  😖",
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        return;
      }
      const upi = s?.indexOf('?pa=') ? s?.indexOf('?pa=') : 0;
      const end = s?.indexOf('&mc') ? s?.indexOf('&mc') : 0;
      const n = s ? s?.slice(name + 4, end).replace('%20', ' ') : '';
      const id = s ? s?.slice(upi + 4, name) : '';
      console.log(upi, name, end);
      showAlert(n, id);
      return;
    },
  });
  const devices = useCameraDevices();
  const device: any = getCameraDevice(devices, 'back');
  const openbbar = useSharedValue(false);
  const showcontacts = useSharedValue(false);
  const [cam, tooglecam] = useState(false);
  const [isscaned, tooglescan] = useState(false);
  const setbarheight = useAnimatedStyle(() => ({
    height:
      openbbar.value == true
        ? withTiming('60%', {duration: 200})
        : withTiming('15%', {duration: 300}),
  }));
  const openclosecontact = useAnimatedStyle(() => ({
    height:
      showcontacts.value == true
        ? withTiming('105%', {duration: 400})
        : withTiming('0%', {duration: 700}),
    opacity:
      showcontacts.value == true
        ? withTiming(1, {duration: 5000, easing: Easing.inOut(Easing.sin)})
        : withTiming(0, {duration: 150}),
  }));
  const scan = () => {
    tooglescan(false);
    if (showcontacts.value == true) {
      showcontacts.value = false;
      tooglecam(true);
      return;
    }
    if (cam == true) {
      tooglecam(false);
    } else {
      tooglecam(true);
    }
    openbbar.value = openbbar.value ? false : true;
  };
  const opencontacts = () => {
    if (cam == true) {
      tooglecam(false);
      showcontacts.value = true;
      return;
    }
    showcontacts.value = showcontacts.value == true ? false : true;
    openbbar.value = openbbar.value == true ? false : true;
  };
  return (
    <Animated.View style={[styles.bottom_main, setbarheight]}>
      <TouchableNativeFeedback
        onPress={() => {
          openbbar.value = false;
          tooglecam(false);
          showcontacts.value = false;
        }}>
        <Animated.View
          style={{
            backgroundColor: 'green',
            opacity: 0,
            height: 500,
            width: '100%',
            position: 'absolute',
            top: '-70%',
            zIndex: -10,
          }}
        />
      </TouchableNativeFeedback>

      <Animated.View style={[styles.bottombarItems]}>
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
          contentContainerStyle={[
            {justifyContent: 'center', alignItems: 'center'},
          ]}
          showsVerticalScrollIndicator={false}
          data={[
            {key: 'Ankur Mitra'},
            {key: 'Abhijeet Tabla'},
            {key: 'Akash Saxena'},
            {key: 'Adarsh Goyal'},
            {key: 'Ankit Jain'},
            {key: 'Bhavesh Sharma'},
            {key: 'Akshay cc Advani'},
            {key: 'Ayanshu Kamper'},
            {key: 'Deepika Iyer'},
            {key: 'Ayushi Vinodia'},
            {key: 'Ayush Mitra'},
            {key: 'Abhinav Sahu'},
            {key: 'Mummy'},
            {key: 'Papa'},
            {key: 'Saksham Sahu'},
            {key: 'Avinash was'},
            {key: 'Ayush SSD'},
            {key: 'Ashish Debanath'},
            {key: 'Aditya Tiwari'},
            {key: 'Enosh😖BFF'},
          ]}
          renderItem={({item}) => (
            <Text style={styles.listitem}>{item.key}</Text>
          )}
        />
      </Animated.View>
      <Animated.View style={[styles.bottombar]} />
    </Animated.View>
  );
}
