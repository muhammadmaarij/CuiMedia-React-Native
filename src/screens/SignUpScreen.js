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
import {
  auth,
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  doc,
} from '../config/firebase';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function SignUpScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const SignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        handleSignUp();
        navigation.navigate('SignIn');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        Alert.alert(errorMessage);
      });
  };

  const handleSignUp = async () => {
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        name: name,
        email: email,
        designation: designation,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Sign Up</Text>
      <Text style={styles.subheading}>Please fill the following</Text>

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
        <InputTitle text={'Full Name'} />
        <CustomTextInput
          placeholder="Full Name"
          text={name}
          onChangeText={setName}
          secureText={false}
        />
        <InputTitle text={'Email'} />
        <CustomTextInput
          placeholder="University Email"
          text={email}
          onChangeText={setEmail}
          secureText={false}
        />
        <InputTitle text={'Designation'} />
        <CustomTextInput
          placeholder="Designation"
          text={designation}
          onChangeText={setDesignation}
          secureText={false}
        />
        <InputTitle text={'Password'} />
        <CustomTextInput
          placeholder="Password"
          text={password}
          onChangeText={setPassword}
          secureText={false}
        />
        <InputTitle text={'Confirm Password'} />
        <CustomTextInput
          placeholder="Confirm Password"
          text={confirmPassword}
          onChangeText={setConfirmPassword}
          secureText={false}
        />
      </View>
      <CustomButton title={'SignUp'} onPress={() => SignUp()} />
      <View
        style={{flexDirection: 'row', justifyContent: 'center', marginTop: 5}}>
        <Text style={{fontSize: 16, color: 'white'}}>
          Already have an account?{' '}
        </Text>
        <Pressable onPress={() => {}}>
          <Text style={{fontSize: 16, color: '#13A89E', fontWeight: '600'}}>
            Sign In
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
    height: height * 0.58,
    width: width * 0.9,
    backgroundColor: '#D1D2D9',
    alignSelf: 'center',
    marginTop: height * 0.18,
    borderRadius: 20,
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
});
