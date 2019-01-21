import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { plantsFetch } from '../actions';
import PlantListItem from './PlantListItem';

class PlantGallery extends Component {
  renderItem({ item }) {
    return <PlantListItem plant={item} />;
  }

  render() {
    // console.log(this.props);

    return (
      <FlatList
        data={this.props.plants}
        renderItem={this.renderItem}
        keyExtractor={item => item.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const plants = _.map(state.plants, (val, uid) => ({ ...val, uid }));
  return { plants };
};

export default connect(
  mapStateToProps,
  { plantsFetch }
)(PlantGallery);
