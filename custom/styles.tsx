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
    alignItems: 'center',
  },
  //TopBar
  topbar: {
    position: 'absolute',
    // backgroundColor: '#f8e9e5',
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
    zIndex: 3,
    position: 'absolute',
    left: WIDTH * 0.365,
  },
  //ScrollBox
  scrollbox_root: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    zIndex: 2,
  },
  scrollbox: {
    width: WIDTH,
    height: HEIGHT * 1.2,
    borderRadius: WIDTH * 0.035,
    alignItems: 'center',
    top: HEIGHT * 0.042,
    backgroundColor: '#f8e9e5',
  },
  card: {
    width: '92%',
    backgroundColor: '#faf1ee',
    padding: 5,
    left: 6,
    // elevation: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  money_card: {
    width: '100%',
    backgroundColor: '#faf1ee',
    padding: 10,
    // elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    tintColor: 'red',
  },
  heading: {
    color: '#970009',
    fontFamily: 'monospace',
    fontSize: 12.5,
    letterSpacing: 2,
    fontWeight: 'bold',
    fontVariant: ['oldstyle-nums', 'lining-nums'],
  },
  default: {
    color: '#4d2b15',
    fontFamily: 'Roboto',
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: '100',
  },
  money_text2: {
    color: '#412c1f',
    paddingLeft: 10,
  },
  right: {
    height: 14,
    width: 14,
    left: 3,
    resizeMode: 'contain',
    opacity: 0.6,
  },
  circle_icon: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: '#f8e9e5',
    resizeMode: 'contain',
  },
  //BottomBar
  bottombar: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.1,
    borderRadius: 350,
    transform: [{scaleX: 2.5}],
    opacity: 1,
    backgroundColor: '#e5e5e5',
    zIndex: 10,
    position: 'absolute',
    left: '25%',
    top: '-3%',
  },
  bottom_main: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    zIndex: 10,
    opacity: 0.95,
    width: WIDTH,
    position: 'absolute',
    bottom: '0%',
  },

  bottombarItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: WIDTH,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 11,
  },
  camera: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    position: 'absolute',
    bottom: '35%',
    left: WIDTH * 0.3,
  },
  list: {
    position: 'absolute',
    top: '20%',
    left: WIDTH * 0.3,
    height: '100%',
    width: WIDTH,
    overflow: 'scroll',
  },
  listitem: {
    padding: 10,
    fontSize: 38,
    color: '#000',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  alert: {
    color: 'red',
  },
});

export default styles;
