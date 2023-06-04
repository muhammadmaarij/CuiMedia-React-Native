import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  FlatList,
  StatusBar,
  Image,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../components/CustomButton';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Rizwan khalid',
    image: '../assets/cuilogo.png',
    posttime: '9hr ago',
    eventdate: 'Tues ,6 JUN At 14:00',
    eventname: 'PNAWA Family Festival 2023',
    eventvenue: 'Naval Complex Islamabad E-8',
    eventgoing: '500',
    eventinterested: '300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6',
    title: 'Rizwan khalid',
    image: '../assets/cuilogo.png',
    posttime: '9hr ago',
    eventdate: 'Tues ,6 JUN At 14:00',
    eventname: 'PNAWA Family Festival 2023',
    eventvenue: 'Naval Complex Islamabad E-8',
    eventgoing: '500',
    eventinterested: '300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f',
    title: 'Rizwan khalid',
    image: '../assets/cuilogo.png',
    posttime: '9hr ago',
    eventdate: 'Tues ,6 JUN At 14:00',
    eventname: 'PNAWA Family Festival 2023',
    eventvenue: 'Naval Complex Islamabad E-8',
    eventgoing: '500',
    eventinterested: '300',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97',
    title: 'Rizwan khalid',
    image: '../assets/cuilogo.png',
    posttime: '9hr ago',
    eventdate: 'Tues ,6 JUN At 14:00',
    eventname: 'PNAWA Family Festival 2023',
    eventvenue: 'Naval Complex Islamabad E-8',
    eventgoing: '500',
    eventinterested: '300',
  },
];
const Item = ({
  title,
  image,
  posttime,
  eventdate,
  eventname,
  eventvenue,
  eventinterested,
  eventgoing,
  modalVisible,
  setModalVisible,
}) => (
  <View style={styles.item}>
    <View style={styles.upper}>
      <Image source={require('../assets/cuilogo.png')} style={styles.images} />
      <View style={styles.timename}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.time}>{posttime}</Text>
      </View>
      <View style={styles.ooo}>
        <Pressable>
          <Text style={{color: 'black'}}>ooo</Text>
        </Pressable>
      </View>
    </View>
    <View style={styles.eventphoto}>
      <Image source={require('../assets/cuilogo.png')} />
    </View>

    <View>
      <Text style={styles.eventdate}>{eventdate}</Text>
      <Text style={styles.eventname}>{eventname}</Text>
      <Text style={styles.eventvenue}>{eventvenue}</Text>
      <Text>
        {eventinterested} interested {eventgoing} going
      </Text>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.mButton}>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text}>Interested</Text>
              </Pressable>
            </View>
            <View>
              <Pressable
                style={[styles.button]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text}>Going</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.buttons}>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.text}>Interested</Text>
        </Pressable>
        <View style={styles.buttons}>
          <CustomButton title="Ask Question" />
        </View>
      </View>
    </View>
  </View>
);
export default function EventScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.parent}>
      <Pressable
        onPress={() => {
          navigation.navigate('createevent');
        }}
        style={{
          height: height * 0.04,
          width: height * 0.12,
          backgroundColor: '#13A89E',
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          marginTop: height * 0.1,
          marginLeft: width * 0.6,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontFamily: 'Poppins-Bold',
            alignSelf: 'center',
          }}>
          Add Event
        </Text>
      </Pressable>
      <ImageBackground
        source={require('../assets/bluebg.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.headerv}>
        <Text style={styles.header}>Events For You</Text>
      </View>
      <View>
        <SafeAreaView>
          <FlatList
            data={DATA}
            renderItem={({item}) => (
              <Item
                title={item.title}
                image={item.image}
                posttime={item.posttime}
                eventdate={item.eventdate}
                eventname={item.eventname}
                eventvenue={item.eventvenue}
                eventinterested={item.eventinterested}
                eventgoing={item.eventgoing}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
              />
            )}
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
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
    height: 600,
    resizeMode: 'cover',
    width: width,
    alignSelf: 'flex-end',
    marginTop: height * 0.18,
  },

  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  name: {
    fontSize: 18,
    color: 'black',
  },

  time: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'grey',
  },
  images: {
    borderRadius: 50,
    width: 35,
    height: 35,
  },
  upper: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  timename: {
    marginLeft: 8,
    height: 20,
  },
  eventphoto: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  eventdate: {
    fontSize: 12,
    color: 'black',
  },
  eventname: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Poppins',
  },
  eventvenue: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'grey',
  },
  buttons: {
    marginTop: 5,
  },
  button: {
    height: 45,
    width: width * 0.8,
    backgroundColor: '#13A89E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  mButton: {
    margin: 10,
  },
  header: {
    fontSize: 40,
    color: '#1f0a5c',
    fontWeight: 'bold',
  },
  headerv: {
    marginLeft: 22,
  },
  ooo: {
    height: 30,
    width: 125,
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
});
