import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlantForm from './PlantForm';
import { addPlant } from '../actions';
import { Card, CardSection, Button } from './common';

class PlantEdit extends Component {
  componentDidMount() {
    _.each(this.props.plant, (value, prop) => {
      this.props.addPlant({ prop, value });
    });
  }

  onButtonPress() {
    const { genusSpecies, commonName, nickname } = this.props
    console.log(genusSpecies, commonName, nickname);
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
  const { genusSpecies, commonName, nickname } = state.plantForm;

  return { genusSpecies, commonName, nickname };
}

export default connect(mapStateToProps, { addPlant } )(PlantEdit);
