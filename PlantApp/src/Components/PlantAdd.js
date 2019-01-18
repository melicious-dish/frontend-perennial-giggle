import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { addPlant, plantCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import PlantForm from './PlantForm';

// Plant create Form
// import { Image } from 'react-native';
// import { PhotoUpload } from 'react-native-photo-upload';

// import { ImagePicker } from 'react-native-image-picker';
// import { ImageResizer } from 'react-native-image-resizer';


class PlantCreate extends Component {
  onButtonPress() {
    const { genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo } = this.props;

    this.props.plantCreate({ genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo });
  }

  render() {
    return (
      <Card>
          <PlantForm { ...this.props }/>
        <CardSection>
          <Button onUserPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>


      </Card>
    );
  }
}


const mapStateToProps = (state) => {
  const { genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo } = state.plantForm;

  return { genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo };
}

export default connect(mapStateToProps, {
  addPlant, plantCreate
}) (PlantCreate);
