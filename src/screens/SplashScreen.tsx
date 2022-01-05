import * as React from 'react';
import { Button, View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export interface Props {
  navigation: any;
}

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
      />
    </View>
  );
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
