import { map } from 'lodash';
import React, { Component } from 'react';
import { Image, SectionList, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SectionGrid } from 'react-native-super-grid';
import { CardSection, Card } from './common';
import { plantsFetch } from '../actions';

class PlantGallery extends Component {
  renderItem = ({ item }) => (
    <Image
      style={{
        width: 100,
        height: 100,
        borderRadius: 5,
        padding: 85,
      }}
      source={{ uri: item.url }}
    />
  );

  render() {
    console.log('in render');
    console.log(this.props);

    return (
      <SectionGrid
        contentContainerStyle={styles.containerStyle}
        renderItem={this.renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.textStyle}>{title}</Text>
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
      />
    );
  }
}

const styles = {
  containerStyle: {
    justifyContent: 'flex-end',
    padding: 5,
    backgroundColor: '#f1f0de',
  },
  contentStyle: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  textStyle: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#017f8d',
    color: 'white',
    padding: 5,
  },
};
const mapStateToProps = state => {
  const plants = map(state.plants, (val, uid) => ({ ...val, uid }));
  return { plants };
};

export default connect(
  mapStateToProps,
  { plantsFetch }
)(PlantGallery);
