import React from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';

const width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default function GreyContainer({heightpassed}) {
  if (heightpassed) {
    height = heightpassed;
  } else {
    height = height * 0.6;
  }
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: height,
    backgroundColor: '#D9D9D9',
  },
});
