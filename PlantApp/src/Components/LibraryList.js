import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }
  render() {
    console.log('IN LibraryList');
    return (
      <FlatList

        data={this.props.dataToShow}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
        />
    );
  }
}
// able to get application state from App.js to component level
// if return an object, object will show up as props to class LibraryList
const mapStateToProps = state => {
  console.log(state);
  return { dataToShow: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
