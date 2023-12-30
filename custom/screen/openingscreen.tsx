import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from '../styles';

export default function OpeningScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('main');
      var Drum = require('react-native-sound');
      Drum.setCategory('Playback');
      var drum = new Drum('drum.mp3', Drum.MAIN_BUNDLE, error => {
        drum.play();
      });
    }, 0);
  }, []);
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <Image
        style={{
          resizeMode: 'contain',
          width: '100%',
          height: '100%',
        }}
        source={require('../assets/op.gif')}
      />
    </View>
  );
}
