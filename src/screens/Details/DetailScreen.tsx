import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
// import { useSelector } from 'react-redux';
import { useAppSelector } from '../../utilities/storeHooks';

import { UserDetails } from '../../api/types/types';
import styles from './Styles/DetailStyle';

export interface Props {
  navigation: any;
  name: string;
  user: UserDetails;
}

const DetailScreen: React.FC<Props> = ({ navigation, user }) => {
  // user = useSelector((state: any) => state?.details?.user);
  user = useAppSelector(state => state?.details?.user);
  return (
    <View style={styles.container}>
      <Text>Detail Screen - {user.name} </Text>
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
