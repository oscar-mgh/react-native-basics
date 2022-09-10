import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import React from 'react';

// const { width, height } = Dimensions.get('window')

export default function DimensionesScreen() {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.5}} />
        <View style={{...styles.cajaNaranja, width: width * 1, height: height * .45}} />
      </View>
      <Text style={styles.title}>
        W: {width} H: {height}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 800,
    backgroundColor: '#05D',
  },
  cajaMorada: {
    backgroundColor: 'red',
    width: '50%',
    height: '45%',
  },
  cajaNaranja: {
    backgroundColor: '#4D0',
  },
  title: {
    fontSize: 30,
  },
});
