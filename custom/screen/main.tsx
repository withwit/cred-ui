import {Text, View} from 'react-native';
import styles from '../styles';
import TopBar from './topbar';
import BottomBar from './bottombar';
import ScrollBox from './scrollbox';
import OfferPill from '../components/offerpill';

export default function Main() {
  return (
    <View style={styles.main}>
      <TopBar />
      <OfferPill />
      <ScrollBox />
      <BottomBar />
    </View>
  );
}
