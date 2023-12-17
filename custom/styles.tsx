import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  //Device
  device: {
    width: WIDTH,
    height: HEIGHT,
  },
  // App
  safeareaview: {
    flex: 1000,
    backgroundColor: '#f8e9e5',
  },
  //Main
  main: {
    flex: 1000,
    backgroundColor: '#f8e9e5',
    position: 'relative',
    zIndex: 0,
  },
  //TopBar
  topbar: {
    position: 'absolute',
    backgroundColor: '#f8e9e5',
    top: 0,
    zIndex: 1,
    width: WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: WIDTH * 0.06,
    height: WIDTH * 0.06,
    resizeMode: 'contain',
    margin: WIDTH * 0.01,
    marginLeft: WIDTH * 0.02,
    marginRight: WIDTH * 0.02,
  },

  offerpill: {
    width: WIDTH * 0.24,
    borderRadius: WIDTH * 0.1,
    backgroundColor: '#f8e9e5',
    elevation: 4,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  //ScrollBox
  scrollbox: {
    position: 'absolute',
    backgroundColor: 'grey',
    zIndex: 0,
    width: WIDTH,
    height: HEIGHT,
  },
  //BottomBar
  bottombar: {
    position: 'absolute',
    backgroundColor: 'green',
    zIndex: 2,
    bottom: 0,
    width: WIDTH,
  },
});

export default styles;
