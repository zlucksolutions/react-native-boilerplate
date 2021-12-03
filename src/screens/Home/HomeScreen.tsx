import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { goToDetails } from '../../store/actions/detailsActions';
import styles from './Styles/HomeStyle';
import { useAppDispatch } from '../../utilities/storeHooks';

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container} >
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          dispatch(goToDetails({ name: 'Chintan' }));
        }}
      />
    </View>
  );
}

export default HomeScreen;
