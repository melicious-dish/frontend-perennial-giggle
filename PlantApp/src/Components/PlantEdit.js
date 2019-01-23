import { each } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import PlantForm from './PlantForm';
import { addPlant, plantSave, plantDelete, plantClear } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class PlantEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    each(this.props.plant, (value, prop) => {
      this.props.addPlant({ prop, value });
    });
  }

  onButtonPress() {
    const {
      genusSpecies,
      commonName,
      nickname,
      taskType,
      taskFrequency,
      taskInterval,
      plantImages,
      plant: { uid },
    } = this.props;

    // use plant.uid to specificy which plant. this comes from PlantListItem.js onRowPress() {
    // Actions.plantEdit( { plant: this.props.plant });

    this.props.plantSave({
      genusSpecies,
      commonName,
      nickname,
      taskType,
      taskFrequency,
      taskInterval,
      uid,
      plantImages,
    });
  }

  onAccept() {
    const {
      plant: { uid },
    } = this.props;

    // use plant.uid to specificy which plant. this comes from PlantListItem.js onRowPress() {
    // Actions.plantEdit( { plant: this.props.plant });

    this.props.plantDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <PlantForm />

          <CardSection>
            <Button onUserPress={this.onButtonPress.bind(this)}>
              Save Changes
            </Button>
          </CardSection>

          <CardSection>
            <Button
              onUserPress={() =>
                this.setState({ showModal: !this.state.showModal })
              }
            >
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
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const {
    genusSpecies,
    commonName,
    nickname,
    taskType,
    taskFrequency,
    taskInterval,
    plantImages,
  } = state.plantForm;

  return {
    genusSpecies,
    commonName,
    nickname,
    taskType,
    taskFrequency,
    taskInterval,
    plantImages,
  };
};

// const styles = {};

export default connect(
  mapStateToProps,
  {
    addPlant,
    plantSave,
    plantDelete,
    plantClear,
  }
)(PlantEdit);
