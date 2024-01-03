import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import styles from '../styles';
import TopBar from './topbar';
import BottomBarItems from './bottombaritems';
import ScrollBox from './scrollbox';
import OfferPill from '../components/offerpill';
import Animated, {useSharedValue} from 'react-native-reanimated';

export default function Main() {
  var openbbar = useSharedValue(false);
  return (
    <SafeAreaView style={styles.safeareaview}>
      <Animated.View style={styles.main}>
        <StatusBar
          animated={true}
          backgroundColor={styles.safeareaview.backgroundColor}
        />
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
        <ScrollBox openbbar={openbbar} />
        <BottomBarItems openbbar={openbbar} />
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
      </Animated.View>
    </SafeAreaView>
  );
}
