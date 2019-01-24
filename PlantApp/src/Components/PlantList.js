import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { plantsFetch, logoutUser } from '../actions';
import PlantListItem from './PlantListItem';

class PlantList extends Component {
  componentDidMount() {
    this.props.plantsFetch();
  }

  renderItem({ item }) {
    return <PlantListItem plant={item} />;
  }

  render() {
    // console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.plants}
          renderItem={this.renderItem}
          keyExtractor={item => item.uid}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => {
            this.props.logoutUser();
          }}
        >
          <Text style={styles.textStyle}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
// use for converting an object to array. the val is the plant property (all the data in the plant object), the uid is the key.
const mapStateToProps = state => {
  const plants = _.map(state.plants, (val, uid) => ({ ...val, uid }));
  return { plants };
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#446529',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5,
  },
  buttonStyle: {
    alignSelf: 'stretch',
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
  },
};

export default connect(
  mapStateToProps,
  { plantsFetch, logoutUser }
)(PlantList);
