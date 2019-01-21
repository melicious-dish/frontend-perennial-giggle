import { each } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantForm from './PlantForm';
import { addPlant, plantSave, plantDelete, plantClear } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class PlantEdit extends Component {
  state = { showModal: false}

  componentDidMount() {
    each(this.props.plant, (value, prop) => {
      this.props.addPlant({ prop, value });
    });
  }


  onButtonPress() {
    const { genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo, plant: { uid }} = this.props;

// use plant.uid to specificy which plant. this comes from PlantListItem.js onRowPress() {
  //Actions.plantEdit( { plant: this.props.plant });

    this.props.plantSave({ genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo, uid });
  }

  onAccept() {
    const { plant: { uid } } = this.props;

// use plant.uid to specificy which plant. this comes from PlantListItem.js onRowPress() {
  //Actions.plantEdit( { plant: this.props.plant });

    this.props.plantDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
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

        <CardSection>
          <Button onUserPress={ () => this.setState( { showModal: !this.state.showModal })}>
            Delete Plant
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          >
          Sure you want to delete this plant?
        </Confirm>
      </Card>
    )
  }

}

const mapStateToProps = (state) => {
  const { genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo } = state.plantForm;

  return { genusSpecies, commonName, nickname, taskType, taskFrequency, taskInterval, photo };
}

export default connect(mapStateToProps, {
  addPlant, plantSave, plantDelete, plantClear
} )(PlantEdit);
