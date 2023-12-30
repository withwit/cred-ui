import {Image, View} from 'react-native';
import styles from '../styles';
import TopBar from './topbar';
import BottomBarItems from './bottombaritems';
import ScrollBox from './scrollbox';
import OfferPill from '../components/offerpill';

export default function Home() {
  return (
    <View style={styles.main}>
      <Image
        style={[
          {
            height: 150,
            width: 150,
            resizeMode: 'contain',
            opacity: 1,
            top: '30%',
            position: 'absolute',
          },
        ]}
        source={require('../assets/top-behind.png')}
      />
      <TopBar />
      <OfferPill />
      <ScrollBox />
      <BottomBarItems />
      <Image
        style={[
          {
            height: 150,
            width: 150,
            resizeMode: 'contain',
            opacity: 1,
            bottom: '12%',
            position: 'absolute',
          },
        ]}
        source={require('../assets/footer.png')}
      />
    </View>
  );
}
