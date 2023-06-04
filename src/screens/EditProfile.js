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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function EditProfile({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [user, setUser] = useState(null);
  const [userDocument, setUserDocument] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      console.log(currentUser);
      setUser(currentUser);
      setEmail(currentUser.email);
      console.log('waittt');
      fetchUserDocument(currentUser.email);
      // setName(user.name);
    } else {
      console.log('hereree');
    }
  }, []);

  const fetchUserDocument = async email => {
    // try {
    //   // Query the Firestore collection for the user document with matching email
    //   const querySnapshot = await firestore
    //     .collection('users')
    //     .where('email', '==', email)
    //     .limit(1)
    //     .get();

    //   // Retrieve the user document if it exists
    //   if (!querySnapshot.empty) {
    //     const userDoc = querySnapshot.docs[0];
    //     setUserDocument(userDoc.data());
    //   } else {
    //     // User document not found
    //     console.log('User document not found for email:', email);
    //   }

    try {
      const q = query(collection(db, 'users'), where('email', '==', email));

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log('No matching documents found.');
        return;
      }
      userDoc = querySnapshot.docs[0];

      // Access the document data
      setUserDocument(userDoc.data());
      setName(userDoc.data().name);
      setDesignation(userDoc.data().designation);
      console.log('User document data:', userDocument);
    } catch (error) {
      console.log('Error fetching user document:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log('No matching documents found.');
        return;
      }

      const document = querySnapshot.docs[0];
      const documentId = document.id;

      const userDocRef = doc(db, 'users', documentId);
      await updateDoc(userDocRef, {
        name: name,
        email: email,
        designation: designation,
      });

      console.log('Document updated successfully');
    } catch (e) {
      console.error('Error updating document:', e);
    }
  };

  // const handleUpdate = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, 'users'), {
  //       name: name,
  //       email: email,
  //       designation: designation,
  //     });
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // };

  return (
    <View style={styles.parent}>
      <Text
        style={{
          fontSize: 24,
          color: 'black',
          fontFamily: 'Poppins-Bold',
          alignSelf: 'center',
          marginTop: height * 0.02,
        }}>
        Edit Profile
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: height * 0.009,
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
          <Pressable
            onPress={() => {}}
            style={{
              height: height * 0.04,
              width: height * 0.1,
              backgroundColor: '#13A89E',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontFamily: 'Poppins-Bold',
                alignSelf: 'center',
              }}>
              Update
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {}}
            style={{
              height: height * 0.04,
              width: height * 0.1,
              backgroundColor: '#13A89E',
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 13,
                fontFamily: 'Poppins-Bold',
                alignSelf: 'center',
              }}>
              Remove
            </Text>
          </Pressable>
        </View>
      </View>

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
        <InputTitle text={'Current Password'} />
        <CustomTextInput
          placeholder="Current Password"
          text={password}
          onChangeText={setPassword}
          secureText={false}
        />
        <InputTitle text={'New Password'} />
        <CustomTextInput
          placeholder="New Password"
          text={newPassword}
          onChangeText={setnewPassword}
          secureText={false}
        />
      </View>
      <View>
        <CustomButton title={'Update'} onPress={handleUpdate} />
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
    marginTop: height * 0.22,
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
