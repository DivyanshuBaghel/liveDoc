import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import LiveDoc from './components/LiveDoc'


export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>LiveDoc:</Text>
        <Text style={styles.slabel}>A Text editing App. That have colab feature</Text>
      </View>
      <LiveDoc />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  label:{
    fontSize:50,
    paddingLeft:15,
  },
  slabel:{
    paddingLeft:15,
  }
});
