import {Text, View} from 'react-native';

import React from 'react';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 60,
          textAlign: 'center',
          color: '#468',
        }}>
        Vamonos Rikitix
      </Text>
    </View>
  );
};
