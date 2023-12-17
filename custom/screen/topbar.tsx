import {Text, View} from 'react-native';
import styles from '../styles';

export default function TopBar() {
  return (
    <View style={styles.topbar}>
      <View style={{height: 50, width: 50}}>
        <Text>Cred</Text>
      </View>
      <View style={[{height: 50, width: 50}, styles.notch]}>
        <Text>'()'</Text>
      </View>
      <View style={{height: 50, width: 50}}>
        <Text>Gear</Text>
      </View>
    </View>
  );
}
