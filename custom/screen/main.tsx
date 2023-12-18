import {Text, View} from 'react-native';
import styles from '../styles';
import TopBar from './topbar';
import BottomBarItems from './bottombaritems';
import ScrollBox from './scrollbox';
import OfferPill from '../components/offerpill';

export default function Main() {
  return (
    <View style={styles.main}>
      <TopBar />
      <OfferPill />
      <ScrollBox />
      <BottomBarItems />
      <View style={styles.bottombar} />
    </View>
  );
}
