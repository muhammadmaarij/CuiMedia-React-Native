import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PostCard from '../components/PostCard';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import InputTitle from '../components/InputTitle';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  auth,
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  doc,
  firestore,
  query,
  where,
  getDocs,
  updateDoc,
} from '../config/firebase';
import CustomButton2 from '../components/CustomButton2';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function MenuScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [user, setUser] = useState(null);
  const [userDocument, setUserDocument] = useState(null);

  return (
    <View style={styles.parent}>
      <Text
        style={{
          fontSize: 20,
          color: '#0C134F',
          fontFamily: 'Poppins-Bold',
          alignSelf: 'center',
          marginTop: height * 0.02,
          marginBottom: height * 0.01,
        }}>
        Menu
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.0009,
          marginHorizontal: height * 0.07,
        }}>
        <Image
          style={{
            height: 65,
            width: 65,
            borderRadius: 38.5,
            backgroundColor: 'green',
          }}
          source={require('../assets/cuilogo.png')}
        />

        <View style={{alignItems: 'flex-start', marginLeft: height * 0.05}}>
          <View style={{alignItems: 'flex-start'}}>
            <Text style={styles.heading2}>Muhammad Maarij</Text>
            <Text style={[styles.heading3]}>FA20-BCS-060</Text>
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate('profile');
            }}
            style={{
              height: height * 0.04,
              width: height * 0.12,
              backgroundColor: '#13A89E',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 12,
                fontFamily: 'Poppins-Bold',
                alignSelf: 'center',
              }}>
              Edit Profile
            </Text>
          </Pressable>
        </View>
      </View>

      <View>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: height * 0.05,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <CustomButton2
          title={'Announcement'}
          onPress={() => {}}
          icon={'bullhorn'}
        />
        <CustomButton2
          title={'Events'}
          onPress={() => navigation.navigate('event')}
          icon={'calendar'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: height * 0.05,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <CustomButton2 title={'Societies'} onPress={() => {}} icon={'users'} />
        <CustomButton2
          title={'Lost and Found'}
          onPress={() => {}}
          icon={'map-pin'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          margin: height * 0.05,
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <CustomButton2 title={'Fundraising'} onPress={() => {}} icon={'plus'} />
        <CustomButton2
          title={'Blood Donation'}
          onPress={() => {}}
          icon={'drupal'}
        />
      </View>
      <View>
        <CustomButton title={'Logout'} onPress={() => {}} />
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
    height: height * 0.8,
    resizeMode: 'cover',
    width: width,
    alignSelf: 'flex-end',
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    marginTop: 30,
    margin: 5,
  },
  subheading: {
    fontSize: 16,
    color: 'black',
    marginHorizontal: 20,
  },
  text1: {
    fontSize: 16,
    color: 'white',
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
