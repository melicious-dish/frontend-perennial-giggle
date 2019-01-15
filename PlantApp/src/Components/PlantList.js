import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
// import ListItem from './ListItem';
import { List, ListItem } from 'react-native-elements';
import { plantsFetch } from '../actions';
import PlantListItem from './PlantListItem'


class PlantList extends Component {
  componentDidMount() {
    this.props.plantsFetch();
    console.log("IN COMPONENT DID MOUNT");
    const plants = this.props.plantsFetch()
    console.log("plants",plants);
    console.log("props",this.props);

  }

  renderItem({ item }) {
    return (
      <ListItem
        roundAvatar
        item={item}
        avatar={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfI6nhteYYX3KD2MgxefTqbBitSeafZgEwRG4ImtKL4BAEgrv' }}
        title={item.nickname}
        subtitle={item.genusSpecies}
        />
    );
  }

render() {
  console.log(this.props);
    return (
      <List containerStyle={{ flex: 1 }}>
        <FlatList
          data={this.props.plants}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index.toString}
          />
      </List>


      );
  }
}
const mapStateToProps = state => {
  const plants = _.map(state.plants, (val, uid) => {
    return { ...val, uid };
  });
  return { plants };
};
export default connect(mapStateToProps, { plantsFetch })(PlantList);
