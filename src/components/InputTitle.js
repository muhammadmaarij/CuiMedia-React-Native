import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function InputTitle({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: width * 0.05,
    marginBottom: 2,
  },
  text: {
    fontSize: 13,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
});
