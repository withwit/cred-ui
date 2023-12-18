import {Image, Text, View} from 'react-native';
import styles from '../styles';

export default function TopBar() {
  return (
    <View style={styles.topbar}>
      <Image style={styles.img} source={require('../assets/cred.png')} />

      <Image style={styles.img} source={require('../assets/gear.png')} />
    </View>
  );
}
