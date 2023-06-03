import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

import React, {useState, useEffect} from 'react';
import PostCard from '../components/PostCard';
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/CustomTextInput';
import InputTitle from '../components/InputTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import {
  auth,
  app,
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '../config/firebase';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function PostScreen() {
  const [image, setImage] = useState('');
  const [caption, setCaption] = useState('');
  const [userData, setUserData] = useState('');

  const handlePost = async () => {
    console.log('asdasda', userData);
    try {
      const imageRef = ref(storage, 'images/' + Date.now().toString());
      const snapshot = await uploadBytes(imageRef, image);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(snapshot.ref);

      const docRef = await addDoc(collection(db, 'posts'), {
        email: userData.email,
        caption: caption,
        imageURL: downloadURL,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleImagePicker = async camera => {
    let options = {
      mediaType: 'photo',
    };
    let response;
    if (camera) {
      response = await launchCamera(options);
    } else {
      response = await launchImageLibrary(options);
    }
    console.log(response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      setImage(response.assets[0].uri);
    }
  };

  useEffect(() => {
    const fetchUserDocument = async () => {
      try {
        // Create a query to filter documents based on the email field
        const q = query(
          collection(db, 'users'),
          where('email', '==', 'muhammadmaarij7@gmail.com'),
        );

        // Execute the query
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
          console.log('No matching documents found.');
          return;
        }

        // There should be only one document matching the email
        userDoc = querySnapshot.docs[0];

        // Access the document data
        setUserData(userDoc.data());
        console.log('User document data:', userData);
      } catch (e) {
        console.error('Error retrieving user document:', e);
      }
    };

    fetchUserDocument();
  }, []);

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Post</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.7,
        }}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <InputTitle text={'Add Caption'} />
        <TextInput
          style={styles.input}
          onChangeText={setCaption}
          value={caption}
          placeholder="Full Name"
        />
        <CustomButton title={'Add Photo'} onPress={handleImagePicker} />
        {image ? (
          <Image
            source={{uri: image}}
            style={{width: 120, height: 120, alignSelf: 'center'}}
          />
        ) : (
          <View></View>
        )}
      </View>
      <CustomButton title={'Upload'} onPress={() => handlePost()} />
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
    height: height * 0.4,
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
});
