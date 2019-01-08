import React, { Component } from 'react';
import { FlatList } from 'react-native';
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
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
        />
    );
  }
}

// return an object, object will show up as props to LibraryList
const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
