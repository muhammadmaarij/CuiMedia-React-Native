import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CustomTextInput({
  onChangeText,
  text,
  placeholder,
  secureText,
}) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      placeholder={placeholder}
      secureTextEntry={secureText}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: width * 0.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#006175',
    borderRadius: 10,
    marginBottom: 10,
  },
});
