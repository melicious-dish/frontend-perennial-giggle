import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { addPlant } from '../actions';
import { CardSection, Input, Button } from './common';


class PlantForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
          label='Scientific Name'
          placeholder='Edgeworthia chrysantha'
          value={this.props.genusSpecies}
          onChangeText={value => this.props.addPlant({ prop: 'genusSpecies', value })}
          />
        </CardSection>

        <CardSection>
          <Input
          label='Common Name'
          placeholder='Paperbush'
          value={this.props.commonName}
          onChangeText={value => this.props.addPlant({ prop: 'commonName', value })}
          />
        </CardSection>

        <CardSection>
          <Input
          label='Nickname'
          placeholder='Betty White'
          value={this.props.nickname}
          onChangeText={value => this.props.addPlant({ prop: 'nickname', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerLabelStyle}>Add A Task</Text>
          <Picker
            selectedValue={this.props.shift}
            style={{ flex:1 }}
            onValueChange={value => this.props.addPlant({ prop: 'task', value })}
            >
            <Picker.Item label='Water' value='Water' />
            <Picker.Item label='Repot' value='Repot' />
            <Picker.Item label='Fertilize' value='Fertilize' />
            <Picker.Item label='Prune' value='Prune' />
            <Picker.Item label='Harvest' value='Harvest' />
            <Picker.Item label='Sow' value='Sow' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button >
          Add Photo
          </Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 14,
    justifyContent: 'center'
  }
};

const mapStateToProps = (state) => {
  const { genusSpecies, commonName, nickname } = state.plantForm;

  return { genusSpecies, commonName, nickname };
};

export default connect(mapStateToProps, { addPlant})(PlantForm);
