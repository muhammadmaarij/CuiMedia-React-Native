import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';

import React from 'react';
import PostCard from '../components/PostCard';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import InputTitle from '../components/InputTitle';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View style={styles.parent}>
      <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
        <PostCard />
      </View>
      {/* <CustomButton title={'Done'} />
      <InputTitle text={'Email'} />
      <CustomTextInput /> */}
      
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
});