import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const styles = StyleSheet.create({
  // App
  safeareaview: {
    flex: 1000,
    backgroundColor: '#fff',
  },
  //Main
  main: {
    flex: 1000,
    backgroundColor: 'red',
    position: 'relative',
    zIndex: 0,
  },
  //TopBar
  topbar: {
    position: 'absolute',
    backgroundColor: '#000eee',
    top: 0,
    zIndex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notch: {
    backgroundColor: 'yellow',
  },
  //ScrollBox
  scrollbox: {
    position: 'absolute',
    backgroundColor: 'grey',
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  //BottomBar
  bottombar: {
    position: 'absolute',
    backgroundColor: 'green',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
});

export default styles;
