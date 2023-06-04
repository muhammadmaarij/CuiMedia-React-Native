import React from 'react';
import {StyleSheet, Text, View, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CustomButton2({title, onPress, icon}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Icon name={icon} size={24} color="white" />
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: height * 0.12,
    width: width * 0.38,
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
    marginTop: 5,
  },
});
