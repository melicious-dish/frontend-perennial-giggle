import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Avatar } from 'react-native-elements';
import { CardSection } from './common';

class PlantListItem extends Component {
  onRowPress() {
    Actions.plantEdit({ plant: this.props.plant });
  }

  render() {
    const { nickname, genusSpecies } = this.props.plant;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://www.niehs.nih.gov/health/assets/images/aloe_leaf.jpg',
              }}
              onPress={() => console.log('Works!')}
              activeOpacity={0.7}
            />
            <Text style={styles.titleStyle}>
              {nickname}
              {'\n'}
              <Text style={styles.subtitleStyle}>{genusSpecies}</Text>
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
  subtitleStyle: {
    fontSize: 14,
    paddingLeft: 15,
  },
};
export default PlantListItem;
