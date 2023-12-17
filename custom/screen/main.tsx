import {Text, View} from 'react-native';
import styles from '../styles';

export default function Main() {
  return (
    <View style={styles.main}>
      <TopBar />
      <ScrollBox />
      <BottomBar />
    </View>
  );
}
