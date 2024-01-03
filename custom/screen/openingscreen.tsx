import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';

export default function OpeningScreen({navigation}): any {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'main',
          },
        ],
      });
      var Drum = require('react-native-sound');
      Drum.setCategory('Playback');
      var drum = new Drum('drum.mp3', Drum.MAIN_BUNDLE, () => {
        drum.play();
      });
    }, 0);
  }, []);

  return (
    <View
      style={{
        width: '100%',
        height: '110%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#000',
        top: -10,
      }}>
      <StatusBar hidden backgroundColor={'#000'} animated={true} />
      <Image
        style={{
          resizeMode: 'cover',
          width: '100%',
          height: '50%',
          position: 'absolute',
        }}
        source={require('../assets/op.gif')}
      />
    </View>
  );
}
