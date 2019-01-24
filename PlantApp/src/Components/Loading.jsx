import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class Loading extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        Actions.main({ type: 'replace' });
        return;
      }
      Actions.auth({ type: 'replace' });
    });
  }

  render() {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default Loading;
