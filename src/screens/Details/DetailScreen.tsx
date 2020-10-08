import * as React from 'react';
import { Button, View, Text } from 'react-native';
import styles from './Styles/DetailStyle';

export interface Props {
  navigation: any;
}

const DetailScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailScreen;
