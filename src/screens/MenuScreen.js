import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function MenuScreen({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('profile')}>MenuScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
