import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Post = ({ author, content, image }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.authorContainer}>
        <Text style={styles.authorText}>{author}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{content}</Text>
        {image && <Image source={image} style={styles.image} />}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Repost</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Posts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.timelineText}>Timeline</Text>
      <Post
        author="Gabe Itch"
        content="This is my first post!"
        image='./src/assets/meme1.webp'
      />
      <Post
        author="Rae Piste"
        content="Check out this amazing photo"
        image='./src/assets/meme2.jpg'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  timelineText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    marginBottom: 24,
  },
  authorContainer: {
    marginBottom: 8,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentContainer: {
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    marginRight: 8,
    padding: 8,
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
});

export default Posts;