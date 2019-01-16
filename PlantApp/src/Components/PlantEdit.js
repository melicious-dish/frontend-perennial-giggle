import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantForm from './PlantForm';
import { addPlant, plantSave } from '../actions';
import { Card, CardSection, Button } from './common';

class PlantEdit extends Component {
  componentDidMount() {
    _.each(this.props.plant, (value, prop) => {
      this.props.addPlant({ prop, value });
    });
  }

  onButtonPress() {
    const { genusSpecies, commonName, nickname, task, photo} = this.props;

// use plant.uid to specificy which plant. this comes from PlantListItem.js onRowPress() {
  //Actions.plantEdit( { plant: this.props.plant });

    this.props.plantSave({ genusSpecies, commonName, nickname, task, photo, uid: this.props.plant.uid });
  }
  render() {
    return (
      <Card>
      <PlantForm />

        <CardSection>
          <Button onUserPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    )
  }

}

const mapStateToProps = (state) => {
  const { genusSpecies, commonName, nickname, task, photo } = state.plantForm;

  return { genusSpecies, commonName, nickname, task, photo };
}

export default connect(mapStateToProps, {
  addPlant, plantSave
} )(PlantEdit);
