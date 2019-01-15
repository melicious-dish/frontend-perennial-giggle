import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class PlantListItem extends Component {
  render() {
    const { nickname } = this.props.plant;

    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {nickname}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
export default PlantListItem;
