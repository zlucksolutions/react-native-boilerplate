import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reducerStateIF } from '../../redux/reducers';
import styles from './Styles/DetailStyle';

export interface Props {
  navigation: any;
  name: string;
}

const DetailScreen = ({ navigation, name }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen - {name} </Text>
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

function mapStateToProps({ app }: reducerStateIF) {
  return {
    name: app.name
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
