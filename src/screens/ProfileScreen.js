import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Pressable,
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

export default function ProfileScreen({navigation}) {
  return (
    <View style={styles.parent}>
      <View>
        <View>
          <Text
            style={{
              fontSize: 24,
              color: 'black',
              fontFamily: 'Poppins-Bold',
              alignSelf: 'center',
              marginTop: height * 0.02,
            }}>
            My Profile
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: height * 0.005,
          }}>
          <Image
            style={{
              height: 55,
              width: 55,
              borderRadius: 28.5,
              backgroundColor: 'green',
            }}
            source={require('../assets/cuilogo.png')}
          />
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.heading2}>Muhammad Maarij</Text>
            <Text style={[styles.heading3]}>FA20-BCS-060</Text>
          </View>
          <Pressable onPress={() => navigation.navigate('editprofile')}>
            <Icon name="gear" size={24} color="#0C134F" />
          </Pressable>
        </View>
        <Text
          style={[
            styles.heading3,
            {marginTop: height * 0.01, width: width * 0.8, alignSelf: 'center'},
          ]}>
          My name is Muhammad Maarij, I am 6th semester Computer science student
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.83,
          position: 'absolute',
          marginTop: height * 0.17,
          marginLeft: 0,
        }}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
        <Text style={styles.heading}>Posts</Text>

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
    marginTop: height * 0.1,
  },
  heading: {
    fontSize: 26,
    color: 'black',
    marginLeft: 10,
    fontFamily: 'Poppins-Bold',
    alignSelf: 'flex-start',
  },
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
