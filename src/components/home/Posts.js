import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import meme1 from '../../assets/meme1.webp';
import meme2 from '../../assets/meme2.jpg';

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
        image={meme1}
      />
      <Post
        author="Rae Piste"
        content="Check out this amazing photo"
        image={meme2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ebf2f8',
  },
  timelineText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  postContainer: {
    backgroundColor: '#fff',
    marginBottom: 24,
    borderRadius: 38,
  },
  authorContainer: {
    marginBottom: 8,
    marginLeft: 20,
    marginTop: 15,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  contentContainer: {
    marginBottom: 8,
    marginLeft: 20,
  },
  contentText: {
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 20,
  },
  image: {
    width: '50%',
    height: 600,
    aspectRatio: 1,
    marginBottom: 8,
    marginLeft: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginLeft: 20,
  },
  button: {
    marginRight: 8,
    padding: 8,
    backgroundColor: '#c8e5ff',
    borderRadius: 38,
    marginLeft: 20,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 14,
    color: '#000',
  },
});

export default Posts;