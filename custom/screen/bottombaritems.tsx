import {
  Text,
  TouchableNativeFeedback,
  View,
  Image,
  FlatList,
  SectionList,
  ToastAndroid,
  Alert,
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
  // upi://pay?pa=9589611246@paytm&pn=Anmol%20Sahu&mc=0000&mode=02&purpose=00&orgid=159761&cust=156319738
  // upi://pay?pa=anmolsahu007.as-2@okhdfcbank&pn=Anmol%20Sahu&aid=uGICAgIC14cvMCQ

  const showAlert = (n: String, id: String) => {
    Alert.alert(
      '',
      'Scanned to pay ' + n + ' for UPI:\n' + id,
      [
        // {
        //   text: 'Cancel',
        //   onPress: () => Alert.alert('Cancel Pressed'),
        //   style: 'cancel',
        // },
      ],
      {
        cancelable: true,
        // onDismiss: () => tooglecam(true),
      },
    );
  };

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],

    onCodeScanned: codes => {
      tooglecam(false);
      openbbar.value = false;
      const s = codes[0].value;
      const name = s?.indexOf('&pn=');
      console.log(name, '0000000');
      if (name == -1) {
        ToastAndroid.showWithGravity(
          "😖It's not what i think it is.",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
        openbbar.value = false;
        return;
      }

      const upi = s?.indexOf('?pa=');
      const end = s?.indexOf('&mc');
      const n = s?.slice(name + 4, end).replace('%20', ' ');
      const id = s?.slice(upi + 4, name);
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

  // const openclosestyle = useAnimatedStyle(() => ({
  //   top: openbbar.value == true ? withTiming('0%') : withTiming('50%'),
  // }));
  const setbarheight = useAnimatedStyle(() => ({
    height:
      openbbar.value == true
        ? withTiming('65%', {duration: 200})
        : withTiming('15%', {duration: 300}),
  }));
  const openclosecontact = useAnimatedStyle(() => ({
    height:
      showcontacts.value == true
        ? withTiming('100%', {duration: 600})
        : withTiming('0%', {duration: 200}),
    opacity:
      showcontacts.value == true
        ? withTiming(1, {duration: 1400})
        : withTiming(0, {duration: 600}),
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
    console.log('pressed');
    if (cam == true) {
      tooglecam(false);
      showcontacts.value = true;
      return;
    }
    openbbar.value = openbbar.value == true ? false : true;
    showcontacts.value = showcontacts.value == true ? false : true;
  };
  return (
    <Animated.View style={[styles.bottom_main, setbarheight]}>
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
            {key: 'Dan1'},
            {key: 'Dominic1'},
            {key: 'Jackson1'},
            {key: 'James1'},
            {key: 'Joela'},
            {key: 'Johna'},
            {key: 'Jilliana'},
            {key: 'Jimamy'},
            {key: 'Julaie'},
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
