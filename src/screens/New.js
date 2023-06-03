import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {
  collection,
  getDocs,
  query,
  where,
  db,
  orderBy,
  limit,
} from '../config/firebase';

export default function New() {
  const [imageURL, setImageURL] = useState(
    'https://firebasestorage.googleapis.com/v0/b/cui-media.appspot.com/o/images%2F1685548545330?alt=media&token=bc5a70b9-c387-4cbf-ae19-28f87ebc37e8',
  );

  useEffect(() => {
    // Fetch the most recent post from Firestore
    const fetchMostRecentPost = async () => {
      try {
        const q = query(
          collection(db, 'posts'),
          orderBy('timestamp', 'desc'),
          limit(1),
        );
        const querySnapshot = await getDocs(q);
        console.log('asd', querySnapshot);
        if (!querySnapshot.empty) {
          const postDoc = querySnapshot.docs[0];
          const postData = postDoc.data();
          console.log(postData);
          setImageURL(postData.imageURL);
        }
      } catch (e) {
        console.error('Error fetching post:', e);
      }
    };

    fetchMostRecentPost();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recent Post</Text>
      {imageURL ? (
        <Image source={{uri: imageURL}} style={styles.image} />
      ) : (
        <Text>No posts available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
