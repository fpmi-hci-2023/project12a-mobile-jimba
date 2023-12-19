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
        <Text>Oh lalalala</Text>
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
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
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
    backgroundColor: 'gray',
    marginTop: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  menuButton: {
    flex: 1,
    height: 40,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutMe: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textField: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    padding: 10,
    height: 100,
  },
});