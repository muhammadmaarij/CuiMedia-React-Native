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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function CreateEvent() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [details, setDetails] = useState('');

  const handleEvent = async () => {
    try {
      const docRef = await addDoc(collection(db, 'events'), {
        name: name,
        date: date,
        venue: venue,
        details: details,
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

  return (
    <View style={styles.parent}>
      <Text style={styles.heading}>Add Event</Text>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: height * 0.6,
        }}>
        <ImageBackground
          source={require('../assets/bluebg.png')}
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={handleImagePicker}>
          <Text style={styles.text}>Add Photo</Text>
        </Pressable>
        <InputTitle text={'Add name'} />
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Add name"
        />
        <InputTitle text={'Date'} />
        <TextInput
          style={styles.input}
          onChangeText={setDate}
          value={date}
          placeholder="Date"
        />
        <InputTitle text={'Venue'} />
        <TextInput
          style={styles.input}
          onChangeText={setVenue}
          value={venue}
          placeholder="Venue"
        />
        <InputTitle text={'Details'} />
        <TextInput
          style={styles.input}
          onChangeText={setDetails}
          value={details}
          placeholder="Details"
        />
      </View>
      <View style={{marginTop: height * 0.015}}>
        <CustomButton title={'Create'} onPress={() => handleEvent()} />
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
