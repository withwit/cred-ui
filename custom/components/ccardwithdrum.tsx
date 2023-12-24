import {
  Button,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const {width} = Dimensions.get('window');
import data from './data';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const _size = width * 0.9;
const layout = {
  borderRadius: 16,
  width: _size,
  height: _size * 0.6,
  spacing: 16,
  cardsGap: 22,
};
var Drum = require('react-native-sound');
Drum.setCategory('Playback');
var drum = new Drum('drum.mp3', Drum.MAIN_BUNDLE, error => {
  drum.play();
});

function Card({
  info,
  index,
  sharedval,
}: {
  index: number;
  info: (typeof data)[0];
  sharedval: SharedValue<number>;
}) {
  const cstyle = useAnimatedStyle(() => ({
    zIndex: data.length - index,
    transform: [
      {
        translateY: interpolate(
          sharedval.value,
          [index - 1, index, index + 1],
          [250, 20, 300],
        ),
      },
      {
        scale: interpolate(
          sharedval.value,
          [index - 1, index, index + 1],
          [0.94, 1, 1],
        ),
      },
    ],
  }));

  return (
    <Animated.View style={[styles.card, cstyle]}>
      <View style={{flexDirection: 'column', top: 25, right: 10}}>
        <Text style={[styles.cnum, {top: 0}]}>{'XXXX'}</Text>
        <Text style={[styles.cnum, {top: 30}]}>{'XXXX'}</Text>
        <Text
          style={[
            styles.cnum,
            {
              top: 15,
              right: 15,
              letterSpacing: 2,
              fontWeight: '900',
              color: '#fff',
              opacity: 1,
              borderWidth: 5,
              borderRadius: 20,
              borderColor: '#fff',
            },
          ]}>
          {info.last4}
        </Text>
      </View>
      <View style={styles.cardContent}>
        <View
          style={{
            backgroundColor: '#EAECCC',
            opacity: 0.1,
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: '0%',
          }}
        />
        <Text style={styles.cname}>{info.cname}</Text>
        <Text style={styles.name}>{info.holder}</Text>
        <Text style={[styles.rest, {fontWeight: '600', fontSize: 24}]}>
          {'₹' + info.due}
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rest,
              {
                textTransform: 'uppercase',
                fontWeight: '300',
                backgroundColor: '#B06161',
                color: '#fff',
                padding: 4,
                paddingTop: 6,
              },
            ]}>
            {'  Due in ' + info.duedt + ' days  '}
          </Text>
          <View style={{width: 10}} />
          <Text
            style={[
              styles.rest,
              {
                textTransform: 'uppercase',
                fontWeight: '300',
                backgroundColor: '#000',
                opacity: 0.7,
                color: '#fff',
                padding: 4,
                paddingTop: 6,
              },
            ]}>
            {' Pay Now  '}
          </Text>
        </View>

        <View
          style={{
            bottom: '2%',
            left: '84%',
            position: 'absolute',
            opacity: 0.75,
          }}>
          <Image
            style={{
              height: 40,
              width: 50,
              resizeMode: 'contain',
            }}
            source={info.type}
          />
        </View>
      </View>
    </Animated.View>
  );
}

export default function CCard() {
  const sharedval = useSharedValue(0);
  const _drum = args => {
    console.log(args);
    drum.play();
  };
  const pan = Gesture.Pan()
    .onChange(event => {
      if (event.velocityY > 0 && event.velocityY > 5000) {
        console.log('   PAN UP');
        sharedval.value = withTiming(data.length - 1, {
          duration: 300,
        });
      } else if (event.velocityY < 0 && event.velocityY < -6500) {
        console.log('   PAN DOWN');
        sharedval.value = withTiming(0, {
          duration: 300,
        });
      }
    })
    .onFinalize(event => {});
  const flingup = Gesture.Fling()
    .direction(Directions.UP)
    .onStart(() => {
      console.log('fling up', sharedval.value);
      if (sharedval.value <= 0) {
        return;
      }
      runOnJS(_drum)('YEAAAAH');
      sharedval.value = withTiming(sharedval.value - 1, {duration: 500});
    });

  const flingdown = Gesture.Fling()
    .direction(Directions.DOWN)
    .onStart(() => {
      console.log('fling down', sharedval.value);

      if (sharedval.value >= data.length - 1) {
        return;
      }
      runOnJS(_drum)('YEAAAAH');
      sharedval.value = withTiming(sharedval.value + 1, {
        duration: 500,
      });
    });

  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={Gesture.Simultaneous(flingdown, flingup, pan)}>
        <Animated.View
          style={{
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: layout.cardsGap * 2,
            position: 'relative',
            opacity: 1,
          }}
          pointerEvents="box-none">
          {data.map((c, index) => {
            return (
              <Card info={c} key={c.id} index={index} sharedval={sharedval} />
            );
          })}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -100,
    left: -18,
    height: '10%',
    paddingTop: 10,
    padding: layout.spacing,
  },
  card: {
    borderRadius: layout.borderRadius,
    width: layout.width,
    height: layout.height,
    backgroundColor: '#faf1ee',
    elevation: 10,
    opacity: 1,
    position: 'absolute',
    bottom: 100,
    left: 30,
    overflow: 'hidden',
  },
  cname: {fontSize: 36, fontWeight: '600', color: '#B06161'},
  name: {
    top: 5,
    fontSize: 24,
    fontWeight: '400',
    letterSpacing: 3,
    color: '#000',
  },
  cnum: {
    fontWeight: '600',
    position: 'absolute',
    right: layout.spacing,
    fontSize: 70,
    color: '#DC8686',
    opacity: 1,
  },
  rest: {
    fontSize: 18,
    fontWeight: '500',
    color: '#607274',
    letterSpacing: 1,
  },
  cardContent: {
    gap: layout.spacing,
    // marginBottom: layout.spacing,
    color: '#607274',
    height: '100%',
    width: '100%',
    left: 5,
  },
  row: {
    flexDirection: 'row',
    columnGap: layout.spacing / 2,
    alignItems: 'center',
  },
});
