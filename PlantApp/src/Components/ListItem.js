import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;
    console.log('In render description');
    // console.log(library.id);
    if (library.item.id === selectedLibraryId) {
      return (

        <Text>
          Species: {library.item.Species}
          .
          Genus: {library.item.Genus}
        </Text>

      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const  { id, Common_Name } = this.props.library.item;

    // console.log('in LIST  ITEM');
    // console.log(this.props);
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectedLibrary(id)}
        >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {Common_Name}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

// first () is to mapStateToProps
export default connect(mapStateToProps, actions)(ListItem);
