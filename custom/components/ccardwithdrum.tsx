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
  height: _size * 0.7,
  spacing: 12,
  cardsGap: 22,
};

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
      <Text
        style={[
          styles.title,
          {
            position: 'absolute',
            top: -layout.spacing,
            right: layout.spacing,
            fontSize: 102,
            color: '#000',
            opacity: 0.5,
          },
        ]}>
        {index}
      </Text>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{info.cname}</Text>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{info.type}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{info.holder}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{info.last4}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{info.due}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.subtitle}>{info.duedt}</Text>
        </View>
        <Button title="Pay Now" />
      </View>
      <Image
        style={[
          {
            height: '110%',
            width: '108%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          },
        ]}
        source={info.cover}
      />
    </Animated.View>
  );
}

var Drum = require('react-native-sound');
Drum.setCategory('Playback');
var drum = new Drum('drum.mp3', Drum.MAIN_BUNDLE, error => {
  drum.play();
});
export default function CCard() {
  const sharedval = useSharedValue(0);
  const displacement = useSharedValue(0);
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
    bottom: 50,
    left: -18,
    height: '10%',
    paddingTop: 10,
    padding: layout.spacing,
  },
  card: {
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
    overflow: 'hidden',
  },
  title: {fontSize: 32, fontWeight: '600', color: '#000'},
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
  icon: {},
});
