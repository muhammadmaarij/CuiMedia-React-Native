import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native';

import React from 'react';
import PostCard from '../components/PostCard';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import InputTitle from '../components/InputTitle';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function HomeScreen() {
  return (
    <View style={styles.parent}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Text style={styles.heading}>CUI Timeline</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: width * 0.3,
          }}>
          <Image
            source={require('../assets/clock.png')}
            style={{
              height: height * 0.05,
              resizeMode: 'cover',
              width: height * 0.05,
            }}
          />
          <Image
            source={require('../assets/Chat.png')}
            style={{
              height: height * 0.05,
              resizeMode: 'cover',
              width: height * 0.05,
            }}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.95,
        }}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
        <ScrollView>
          <PostCard
            name={'Muhammad Maarij'}
            time={'1h ago'}
            caption={'This is Greek salad'}
            uri={''}
          />
          <PostCard
            name={'Muhammad Maarij'}
            time={'1h ago'}
            caption={'This is Greek salad'}
            uri={''}
          />
        </ScrollView>
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
    flex: 0.75,
    height: height * 0.85,
    resizeMode: 'cover',
    width: width,
    alignSelf: 'flex-end',
    marginTop: height * 0.05,
  },
  heading: {
    fontSize: 32,
    color: '#0C134F',
    marginTop: 10,
    fontFamily: 'Poppins-Medium',
  },
});
