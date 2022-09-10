import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';

export default function ExcerciseScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.pupleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.cyanBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center'
  },
  pupleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
},
orangeBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B',
	top: 50
  },
  cyanBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#28C4D9',
  },
});
