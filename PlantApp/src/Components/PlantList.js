import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { plantsFetch } from '../actions';
import PlantListItem from './PlantListItem'


class PlantList extends Component {
  componentDidMount() {
    this.props.plantsFetch();
  }

  renderItem({ item }) {
    return (
      <PlantListItem
        plant={item}
        />
    );
  }

render() {
  // console.log(this.props);
    return (
        <FlatList
          data={this.props.plants}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.uid }
          />
      );
  }
}
// use for converting an object to array. the val is the plant property (all the data in the plant object), the uid is the key.
const mapStateToProps = state => {
  const plants = _.map(state.plants, (val, uid) => {
    return { ...val, uid };
  });
  return { plants };
};
export default connect(mapStateToProps, { plantsFetch })(PlantList);
