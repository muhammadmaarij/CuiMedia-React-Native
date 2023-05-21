import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function PostCard({name, time, caption, uri}) {
  const [imageHeight, setImageHeight] = useState(0);

  const handleImageLoad = event => {
    const {height, width} = event.nativeEvent.source;
    const aspectRatio = width / height;
    const calculatedHeight = (screenWidth * 0.8) / aspectRatio;
    setImageHeight(calculatedHeight);
  };

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: imageHeight + 120,
        backgroundColor: 'white',
        borderRadius: 20,
        marginVertical: 20,
      }}>
      <View style={{flexDirection: 'row', margin: 22}}>
        <Image
          style={{
            height: 38,
            width: 38,
            borderRadius: 17.5,
            backgroundColor: 'green',
            marginRight: 12,
          }}
          source={{
            uri: uri,
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <Text style={styles.caption}>{caption}</Text>
      <View style={[styles.container, {height: imageHeight}]}>
        <Image
          source={{
            uri: 'https://github.com/Meta-Mobile-Developer-PC/Working-With-Data-API/blob/main/images/greekSalad.jpg?raw=true',
          }}
          style={[
            styles.image,
            {height: imageHeight, width: screenWidth * 0.8},
          ]}
          onLoad={handleImageLoad}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth * 0.8,
  },
  image: {
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
  },
  caption: {
    marginHorizontal: 15,
    marginBottom: 5,
    maxWidth: screenWidth * 0.7,
  },
});
