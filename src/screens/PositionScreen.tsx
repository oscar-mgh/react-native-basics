import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PositionScreen() {
  return (
    <View style={styles.absoluteFather}>
      <View style={styles.container}>
        <View style={styles.blackBox} />
        <View style={styles.blueBox} />
        <View style={styles.greenBox} />
        <View style={styles.pinkBox} />
        <View style={styles.purpleBox} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  absoluteFather: {
	flex: 1,
    backgroundColor: '#08A4A9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  container: {
    backgroundColor: '#28C4A9',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: 350,
    width: 350,
  },
  blueBox: {
    backgroundColor: '#05F',
    width: 100,
    height: 100,
    borderWidth: 9,
    position: 'absolute',
    borderColor: 'white',
    right: 0,
  },
  greenBox: {
    backgroundColor: '#3E0',
    width: 100,
    height: 100,
    borderWidth: 9,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  pinkBox: {
    backgroundColor: '#F9A',
    width: 100,
    height: 100,
    borderWidth: 9,
    position: 'absolute',
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#96D',
    width: 100,
    height: 100,
    borderWidth: 9,
    borderColor: 'white',
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  blackBox: {
    backgroundColor: '#161616',
    // width: 100,
    // height: 100,
    borderWidth: 9,
    borderColor: 'red',
    // position: 'absolute',
    // left: 0,
    // bottom: 0,
    // right: 0,
    // top: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
