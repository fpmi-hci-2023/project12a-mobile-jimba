import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';
import Login from '../Login';

type ISignupProps = {
}

type Props = NativeStackScreenProps<ISignupProps>;

const Signup: React.FunctionComponent<Props> = ({navigation}) => {
  return (
    <View>
        <Text>Signup</Text>
        <Button
            title='Go to Login'
            onPress={() => navigation.navigate()}
        />
    </View>
  );
};

export default Signup;
