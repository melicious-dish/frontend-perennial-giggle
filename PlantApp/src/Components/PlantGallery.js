import { map } from 'lodash';
import React, { Component } from 'react';
// import { FlatList } from 'react-native';
import { Image, SectionList, Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import { plantsFetch } from '../actions';
// import PlantListItem from './PlantListItem';

class PlantGallery extends Component {
  renderItem = ({ item }) => (
    <Image
      key={item.id}
      style={{ width: 100, height: 100 }}
      source={{ uri: item.url }}
    />
  );

  render() {
    console.log('in render');
    console.log(this.props);

    return (
      <SectionList
        renderItem={this.renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{ fontSize: 18, padding: 10 }}>{title}</Text>
        )}
        sections={this.props.plants
          .filter(plant => plant.plantImages)
          .map(plant => ({
            title: plant.nickname,
            data: map(plant.plantImages, (url, id) => ({
              id,
              url,
            })),
          }))}
        keyExtractor={item => item.id}
      />
    );
  }
}
const mapStateToProps = state => {
  const plants = map(state.plants, (val, uid) => ({ ...val, uid }));
  return { plants };
};

export default connect(
  mapStateToProps,
  { plantsFetch }
)(PlantGallery);
