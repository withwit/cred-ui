import {Image, Text, View} from 'react-native';
import styles from '../styles';
import OfferPill from '../components/offerpill';

export default function TopBar() {
  return (
    <View style={styles.topbar}>
      <Image style={styles.img} source={require('../assets/cred.png')} />
      <OfferPill />
      <Image style={styles.img} source={require('../assets/gear.png')} />
    </View>
  );
}
