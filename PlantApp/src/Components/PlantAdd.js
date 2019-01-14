import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { addPlant, plantCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

// import { Image } from 'react-native';
// import { PhotoUpload } from 'react-native-photo-upload';

// import { ImagePicker } from 'react-native-image-picker';
// import { ImageResizer } from 'react-native-image-resizer';


class PlantCreate extends Component {
onButtonPress() {
  const { genusSpecies, commonName, nickname, task, photo } = this.props;

  this.props.plantCreate({ genusSpecies, commonName, nickname, task: task || 'Water', photo });
}

  render() {
    return (
      <Card>
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

        <CardSection>
          <Button onUserPress={this.onButtonPress.bind(this)}>
          Create
          </Button>
        </CardSection>


      </Card>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 14,
    justifyContent: 'center'
  }
}
const mapStateToProps = (state) => {
  const { genusSpecies, commonName, nickname, task, photo } = state.plantForm;

  return { genusSpecies, commonName, nickname, task, photo };
}

export default connect(mapStateToProps, {
  addPlant, plantCreate
}) (PlantCreate);
