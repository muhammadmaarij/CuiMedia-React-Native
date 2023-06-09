import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';

import React, {useState} from 'react';
import PostCard from '../components/PostCard';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import InputTitle from '../components/InputTitle';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {auth} from '../config/firebase';
import StackNavigator from '../navigation/StackNavigator';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SignInScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnboardingComplete = () => {
    // Call the function from StackNavigator component
    StackNavigator.handleOnboardingComplete();
  };

  const Login = () => {
    console.log('radsad');
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        console.log('erer');
        const user = userCredential.user;
        navigation.navigate('root');
        handleOnboardingComplete();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        Alert.alert(errorMessage);
      });
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Sign In</Text>
      <Text style={styles.subheading}>Enter your credentails</Text>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.66,
        }}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <InputTitle text={'Email'} />
        <CustomTextInput
          placeholder="University Email"
          text={email}
          onChangeText={setEmail}
          secureText={false}
        />
        <InputTitle text={'Password'} />
        <CustomTextInput
          placeholder="Password"
          text={password}
          onChangeText={setPassword}
          secureText={false}
        />
        <View>
          <Text
            style={{
              fontSize: 16,
              color: '#0C134F',
              alignSelf: 'flex-end',
              marginRight: width * 0.05,
              marginTop: 5,
            }}>
            Forget Password?
          </Text>
        </View>
      </View>
      <CustomButton title={'SignIn'} onPress={() => Login()} />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
        <Text style={{fontSize: 16, color: 'white'}}>
          Don't have an account?{' '}
        </Text>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 16, color: '#13A89E', fontWeight: '600'}}>
            Sign Up
          </Text>
        </Pressable>
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
    height: height * 0.75,
    resizeMode: 'cover',
    width: width,
    alignSelf: 'flex-end',
    marginTop: height * 0.18,
  },
  container: {
    position: 'absolute',
    height: height * 0.3,
    width: width * 0.9,
    backgroundColor: '#D1D2D9',
    alignSelf: 'center',
    marginTop: height * 0.19,
    borderRadius: 20,
  },
  heading: {
    fontSize: 26,
    color: 'black',
    marginLeft: 20,
    marginTop: 30,
    margin: 5,
    fontFamily: 'Poppins-Bold',
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
});
