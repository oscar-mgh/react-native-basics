import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fab from '../components/Fab';

export default function ContadorScreen() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {counter}</Text>

      <Fab title="+ 1" onPress={() => setCounter(counter + 1)} />
      <Fab title="- 1" position="bl" onPress={() => setCounter(counter - 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '500',
    letterSpacing: 2,
    color: '#25A',
  },
});
