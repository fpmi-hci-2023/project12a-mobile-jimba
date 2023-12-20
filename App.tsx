import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/features/Auth/Login';
import Signup from './src/features/Auth/Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Signup' component={Signup} />
            {/* // <Stack.Screen name='Home' component={HomeScreen} /> */}
        </Stack.Navigator>
    </NavigationContainer>
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