import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
 } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentDidUpdate() {
    LayoutAnimation.spring();
  }


  renderDescription() {
    const { library, expanded } = this.props;
    console.log('In render description');
    // console.log(library.id);
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            Species: {library.item.Species}
            .
            Genus: {library.item.Genus}
          </Text>
        </CardSection>
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

// ownProps is = this.state.props
// take logic out of components and put here

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded };
};

// first () is to mapStateToProps
export default connect(mapStateToProps, actions)(ListItem);
