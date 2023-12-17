import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Main from './custom/screen/main';
import styles from './custom/styles';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <StatusBar backgroundColor={styles.safeareaview.backgroundColor} />
      <Main />
    </SafeAreaView>
  );
}
