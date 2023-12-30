import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Main from './custom/screen/main';
import styles from './custom/styles';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OpeningScreen from './custom/screen/openingscreen';

const Stack = createNativeStackNavigator();
export default function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeareaview}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="opening" component={OpeningScreen} />
          <Stack.Screen name="main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
