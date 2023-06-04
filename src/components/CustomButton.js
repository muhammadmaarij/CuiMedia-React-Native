import React from 'react';
import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CustomButton({title, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 45,
    width: width * 0.8,
    backgroundColor: '#13A89E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Poppins-Bold',
  },
});
