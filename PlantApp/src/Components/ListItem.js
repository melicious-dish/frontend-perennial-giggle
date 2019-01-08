import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    console.log('in LIST  ITEM');
    console.log(this.props);
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.item.Common_Name}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
