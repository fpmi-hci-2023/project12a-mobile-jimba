import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/home/HomePage';
import Posts from './src/components/home/Posts';

const Stack = createStackNavigator();

export default function App() {
  const [showHome, setShowHome] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  const navigateToHome = () => {
    setShowHome(true);
  };

  if (showHome) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const navigateToPosts = () => {
    setShowPosts(true);
  };

  if (showPosts) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Posts" component={Posts} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  const navigateToVideo = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  
    Linking.openURL(videoUrl);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome}>
        <Text>Click here to open Home</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <TouchableOpacity onPress={navigateToPosts}>
        <Text>Click here to open Posts</Text>
      </TouchableOpacity>
      <Text>{'\n'}</Text>
      <TouchableOpacity onPress={navigateToVideo}>
        <Text>Click here to open ( ͡° ͜ʖ ͡°)</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});