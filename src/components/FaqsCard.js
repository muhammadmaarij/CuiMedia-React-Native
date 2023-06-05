import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FaqsCard({question, time, answer}) {
  return (
    <View style={{margin: 20, marginRight: 30}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.heading2}>{question}</Text>
        <Text style={{color: '#13A89E', fontWeight: '500'}}>{time}</Text>
      </View>
      <Text style={styles.heading3}>{answer}</Text>
      <View
        style={{
          width: 350,
          height: 2,
          backgroundColor: '#13A89E',
          alignSelf: 'center',
          marginTop: 10,
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading2: {
    fontSize: 18,
    color: 'black',
    fontFamily: 'Poppins-Bold',
  },
  heading3: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});
