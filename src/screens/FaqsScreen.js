import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import CustomButton from '../components/CustomButton';
import InputTitle from '../components/InputTitle';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {db, collection, addDoc} from '../config/firebase';
import FaqsCard from '../components/FaqsCard';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function FaqsScreen() {
  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>FAQs</Text>
      <FaqsCard question={'Question 1'} answer={'Answer 1'} time={'1m agp'} />
      <FaqsCard question={'Question 1'} answer={'Answer 1'} time={'1m agp'} />
      <FaqsCard question={'Question 1'} answer={'Answer 1'} time={'1m agp'} />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#D1D2D9',
  },
  backgroundImage: {
    flex: 1,
    height: height * 0.75,
    resizeMode: 'cover',
    width: width,
    alignSelf: 'flex-end',
    marginTop: height * 0.25,
  },
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
  container: {
    position: 'absolute',
    height: height * 0.51,
    width: width * 0.9,
    backgroundColor: '#D1D2D9',
    alignSelf: 'center',
    marginTop: height * 0.19,
    borderRadius: 20,
  },
  heading: {
    fontSize: 26,
    color: 'black',
    marginTop: 30,
    margin: 5,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
  },
  button: {
    height: 40,
    width: width * 0.3,
    backgroundColor: '#13A89E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 10,
    marginRight: height * 0.032,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
});
