import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Image, Text} from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function PostCard() {
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
        justifyContent: 'flex-end',
        height: imageHeight + 120,
        backgroundColor: 'white',
        borderRadius: 20,
      }}>
      <View>
        <Image
          style={{
            height: 35,
            width: 35,
            borderRadius: 17.5,
            backgroundColor: 'green',
          }}
        />
      </View>
      <Text>hekkk</Text>
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
});
