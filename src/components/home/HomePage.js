import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Posts from './Posts';


export default function HomePage() {
  const navigation = useNavigation();
  const navigateToPosts = () => {
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImage}></View>
        <Text style={styles.profileName}>Profile name</Text>
        <Text style={styles.status}>Online</Text>
        <View style={styles.settingsIcon}></View>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuButton} onPress={navigateToPosts}>
          <Text style={styles.menuButtonText}>Posts</Text>
        </TouchableOpacity>
        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Friends</Text>
        </View>
        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Photos</Text>
        </View>
        <View style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Chats</Text>
        </View>
      </View>
      <Text style={styles.aboutMe}>About me</Text>
      <View style={styles.textField}>
        <Text style={styles.aboutMeText}>Oh lalalala</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#ebf2f8',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: '#fff',
    borderRadius: 38,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: '#93a8ba',
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  status: {
    fontSize: 16,
    marginTop: 5,
  },
  settingsIcon: {
    width: 20,
    height: 20,
    backgroundColor: '#93a8ba',
    marginTop: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
},
  menuButton: {
    flex: 1,
    height: 40,
    backgroundColor: '#c8e5ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 38,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutMe: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
  },
  textField: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 38,
    padding: 10,
    height: 100,
    backgroundColor: '#fff',
  },
  aboutMeText: {
    marginLeft: 20,
  },
});