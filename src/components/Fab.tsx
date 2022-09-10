import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface FabProps {
  title: String;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export default function Fab({title, onPress, position = 'br'}: FabProps) {
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'br' ? styles.right : styles.left,
        ]}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('lightblue', true, 32)}
          onPress={onPress}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  const ios = () => {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return Platform.OS === 'android' ? android() : ios();
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#25A',
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    elevation: 7,
  },
  fabText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  fabLocation: {
    position: 'absolute',
    bottom: 30,
  },
  right: {
    right: 40,
  },
  left: {
    left: 40,
  },
});
