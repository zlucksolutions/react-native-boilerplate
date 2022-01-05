import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goToDetails } from '../../../redux/actions/AppAction';
import styles from './Styles/HomeStyle';

export interface Props {
  navigation: any;
  goToDetailNav: typeof goToDetails;
}

function HomeScreen({ goToDetailNav }: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          goToDetailNav();
        }}
      />
    </View>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      goToDetailNav: goToDetails
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
