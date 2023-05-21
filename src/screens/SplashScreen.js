import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';

import React from 'react';
import PostCard from '../components/PostCard';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import InputTitle from '../components/InputTitle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SplashScreen() {
  return (
    <View style={styles.parent}>
      <StatusBar backgroundColor="#D1D2D9" />
      <Image
        style={{
          marginTop: height * 0.1,
          height: height * 0.3,
          width: height * 0.3,
          borderRadius: 17.5,
          alignSelf: 'center',
        }}
        source={require('../assets/cuilogo.png')}
      />
      <Text
        style={{
          fontSize: 36,
          alignSelf: 'center',
          marginTop: 15,
          color: '#0C134F',
        }}>{`WELCOME TO
   CUI MEDIA`}</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
        <View style={{marginTop: height * 0.11}}>
          <CustomButton title={'Admin'} onPress={() => {}} />
          <View style={{height: height * 0.07}}></View>
          <CustomButton title={'Student'} onPress={() => {}} />
        </View>
      </View>
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
    height: height * 0.65,
    resizeMode: 'cover',
    width: width,
    alignSelf: 'flex-end',
  },
});
