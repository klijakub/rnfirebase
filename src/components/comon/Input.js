import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText }) => {
  const { inputStyle, labelStyle, containterStyle} = styles;

  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#222',
    paddingRight: 5,
    fontSize: 20

  },
  labelStyle: {},
  containterStyle: {}
};

export { Input };
