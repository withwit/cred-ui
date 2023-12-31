import {StyleSheet, Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const _size = WIDTH * 0.9;
const layout = {
  borderRadius: 16,
  width: _size,
  height: _size * 0.6,
  spacing: 12,
  cardsGap: 22,
};

const styles = StyleSheet.create({
  //Device
  device: {
    width: WIDTH,
    height: HEIGHT,
  },
  // App
  safeareaview: {
    flex: 1000,
    backgroundColor: '#faf1ee',
  },
  //Main
  main: {
    flex: 1000,
    backgroundColor: '#faf1ee',
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
    height: '3%',
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
    height: HEIGHT * 1.5,
    zIndex: 2,
    overflow: 'hidden',
  },
  scrollbox: {
    width: WIDTH,
    height: HEIGHT * 1.5,
    borderRadius: WIDTH * 0.05,
    alignItems: 'center',
    top: HEIGHT * 0.06,
    backgroundColor: '#f8e9e5',
    overflow: 'hidden',
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
  container: {
    position: 'absolute',
    bottom: 50,
    left: -18,
    height: '10%',
    paddingTop: 10,
    padding: layout.spacing,
  },
  ccard: {
    borderRadius: layout.borderRadius,
    width: layout.width,
    height: layout.height,
    padding: layout.spacing,
    backgroundColor: '#faf1ee',
    elevation: 10,
    opacity: 1,
    position: 'absolute',
    bottom: 100,
    left: 30,
    // overflow: 'hidden',
    // resizeMode: 'cover',
  },
  cname: {fontSize: 32, fontWeight: '600', color: '#000'},
  subtitle: {fontSize: 12, fontWeight: '600', color: '#000'},
  cardContent: {
    gap: layout.spacing,
    marginBottom: layout.spacing,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    columnGap: layout.spacing / 2,
    alignItems: 'center',
  },
  //BottomBar
  bottombar: {
    width: WIDTH * 0.5,
    height: HEIGHT * 0.1,
    borderRadius: 350,
    transform: [{scaleX: 2.5}],
    opacity: 0.95,
    backgroundColor: '#faf1ee',
    zIndex: 10,
    position: 'absolute',
    left: '25%',
    top: '-4%',
  },
  bottom_main: {
    flexDirection: 'row',
    backgroundColor: '#faf1ee',
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
    top: '-9%',
    // left: -WIDTH * 0.015,
    width: WIDTH,
    // backgroundColor: 'grey',
    transform: [{rotateX: '65deg'}, {scaleY: 1.67}],
  },
  listitem: {
    padding: 10,
    fontSize: 39,
    color: '#000',
    backgroundColor: 'rgba(0, 0, 0, 0.025)',
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
  barcodeTextURL: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
