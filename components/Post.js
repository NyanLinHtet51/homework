import { StyleSheet, ScrollView, View, Text, Image } from 'react-native'
import React from 'react'

const Post = () => {
  const posts = [
    {
      id: 1,
      title: '10 best free photo editing software',
      image: require('../assets/image/photography.png')
    },
    {
      id: 2,
      title: 'Hamburger & Coke',
      image: require('../assets/image/food.png')
    },
    {
      id: 3,
      title: 'Tools',
      image: require('../assets/image/diy.png')
    },
    {
      id: 4,
      title: 'Upcoming movies and trailers',
      image: require('../assets/image/movie.png')
    },
    {
      id: 5,
      title: 'This is a cat',
      image: require('../assets/image/cat.png')
    },
    {
      id: 6,
      title: 'This is a dog',
      image: require('../assets/image/dog.png')
    },
    {
      id: 7,
      title: 'Drive the car',
      image: require('../assets/image/car.png')
    }
  ];

  return (
    <View>
      <Text style={styles.commonTitle}>Posts</Text>
      {posts.map(key => {
        return (
          <View style={styles.imageParent} key={key.id}>
            <Image style={styles.imagePic} source={key.image} />
            <Text style={styles.imageText}>{key.title}</Text>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  commonTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 8
  },
  imageParent: {
    backgroundColor: '#a6ada8',
    width: '95%',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    margin: 20
  },
  imagePic: {
    width: '100%',
    overflow: 'hidden',
    height: 300,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#5c615d'
  },
  imageText: {
    fontSize: 16,
    paddingTop: 20,
    paddingBottom: 20
  }
});

export default Post