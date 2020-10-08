import * as React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './Styles/HomeStyle';

export interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
