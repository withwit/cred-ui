import {Text, View, Image} from 'react-native';
import styles from '../styles';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import CCard from '../components/ccardwithdrum';

export default function ScrollBox(openbbar: any) {
  const displacement = useSharedValue(0);

  const pan = Gesture.Pan()
    .onChange(event => {
      displacement.value += event.changeY;
      openbbar.value = true;
      console.log(openbbar.value);
    })
    .onFinalize(event => {
      if (displacement.value > styles.device.height / 20) {
        displacement.value = withDecay({
          velocity: event.velocityY / 70,
          rubberBandEffect: true,
          rubberBandFactor: 0.4,
          clamp: [0, 0],
        });
      } else if (displacement.value < -styles.device.height / 1.2) {
        displacement.value = withTiming(-styles.device.height / 8);
      } else {
        displacement.value = displacement.value;
      }
    });
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateY: displacement.value}],
  }));
  return (
    <GestureHandlerRootView style={[styles.scrollbox_root]}>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.scrollbox, animatedStyles]}>
          <Image
            style={{width: 350, top: -18}}
            source={require('../assets/line.png')}
          />
          <Image
            style={{width: 50, height: 50, top: -30, resizeMode: 'cover'}}
            source={require('../assets/line.png')}
          />

          <View style={[styles.card, {top: -30}]}>
            <Text style={styles.heading}>YOUR MONEY</Text>
            <View style={{height: 20}} />
            <View style={styles.money_card}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 22, width: 22, left: 2}}
                  source={require('../assets/cred-cash.png')}
                />
                <Text style={styles.default}>CRED cash</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.default}>₹32,883</Text>
                <Image
                  style={styles.right}
                  source={require('../assets/right-arrow.png')}
                />
              </View>
            </View>
            <View style={{height: 5}} />
            <View style={styles.money_card}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  style={{height: 22, width: 22, left: 1}}
                  source={require('../assets/hdfc.png')}
                />
                <Text style={styles.default}>HDFC xx 1377</Text>
                <Image
                  style={[
                    {
                      transform: [{rotate: '90deg'}],
                    },
                    styles.right,
                  ]}
                  source={require('../assets/right-arrow.png')}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={styles.default}>check balance</Text>
                <Image
                  style={styles.right}
                  source={require('../assets/right-arrow.png')}
                />
              </View>
            </View>
            <View style={{height: 40}} />
            <Text style={styles.heading}>EXPLORE CRED</Text>
            <View style={{height: 20}} />

            <View style={styles.money_card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flex: 1,
                }}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={styles.circle_icon}>
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        left: 18,
                        top: 18,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/credit-card.png')}
                    />
                  </View>

                  <Text style={styles.default}>credit{'\n'}cards</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={styles.circle_icon}>
                    <Image
                      style={{
                        height: 25,
                        width: 25,
                        left: 18,
                        top: 18,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/bills.png')}
                    />
                  </View>

                  <Text style={[styles.default, {textAlign: 'center'}]}>
                    bills & {'\n'} recharges
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: 180,
                      height: 80,
                      borderRadius: 80,
                      backgroundColor: '#f5dacd',
                    }}>
                    <Image
                      style={{
                        height: 82,
                        width: 199,
                        top: 1,
                        resizeMode: 'stretch',
                      }}
                      source={require('../assets/sevens.png')}
                    />
                    <Text style={[styles.default, {textAlign: 'center'}]}>
                      rewards
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{height: 40}} />
            <View style={styles.money_card}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  flex: 1,
                  left: -8,
                }}>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={styles.circle_icon}>
                    <Image
                      style={{
                        height: 27,
                        width: 27,
                        left: 15,
                        top: 15,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/paper-bag.png')}
                    />
                  </View>

                  <Text style={styles.default}>shopping</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={styles.circle_icon}>
                    <Image
                      style={{
                        height: 27,
                        width: 27,
                        left: 17,
                        top: 15,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/house.png')}
                    />
                  </View>

                  <Text style={[styles.default, {textAlign: 'center'}]}>
                    rent via {'\n'} credit card
                  </Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={styles.circle_icon}>
                    <Image
                      style={{
                        height: 27,
                        width: 27,
                        left: 16,
                        top: 15,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/cash.png')}
                    />
                  </View>

                  <Text style={styles.default}>cash</Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <View style={styles.circle_icon}>
                    <Image
                      style={{
                        height: 27,
                        width: 27,
                        left: 16,
                        top: 15,
                        resizeMode: 'contain',
                      }}
                      source={require('../assets/all-categ.png')}
                    />
                  </View>

                  <Text style={styles.default}>view all</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{height: 2, width: '100%', backgroundColor: '#e4bca8'}}
          />
          <View style={[styles.card, {top: 30}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.heading}>NEEDS ATTENTION</Text>
              <Text
                style={[
                  styles.default,
                  {textDecorationLine: 'underline', fontWeight: 'bold'},
                ]}>
                view all
              </Text>
            </View>
            <View
              style={[
                styles.card,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#f5dacd',
                },
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.circle_icon}></View>
                <View style={{width: 10}} />
                <Text style={styles.default}>
                  setup a prefered account to get refunds{'\n'}instantly
                </Text>
              </View>
              <Image
                style={[
                  styles.right,
                  {
                    height: 20,
                    width: 20,
                    left: 25,
                    resizeMode: 'contain',
                    opacity: 0.5,
                  },
                ]}
                source={require('../assets/right-tailarrow.png')}
              />
            </View>
          </View>
          <View style={[styles.card, {top: 30}]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 10,
                zIndex: 1,
              }}>
              <Text style={styles.heading}>EXPLORE CLUB</Text>
            </View>
            <View
              style={[
                styles.card,
                {
                  backgroundColor: '#faf1ee',
                },
              ]}>
              <Image
                style={[
                  {
                    height: 450,
                    width: 450,
                    resizeMode: 'contain',
                    opacity: 1,
                    left: -20,
                    top: -20,
                  },
                ]}
                source={require('../assets/explore.png')}
              />
            </View>
          </View>

          <Text
            style={[
              styles.heading,
              {paddingTop: 20, letterSpacing: 3, left: 10},
            ]}>
            BILL FORECAST
          </Text>
          <CCard />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
