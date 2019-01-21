import React, { Component } from 'react';
import { View, Text, Picker, Image } from 'react-native';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { Actions } from 'react-native-router-flux';
import { addPlant } from '../actions';
import { CardSection, Input, Button } from './common';

class PlantForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Scientific Name"
            placeholder="Edgeworthia chrysantha"
            value={this.props.genusSpecies}
            onChangeText={value =>
              this.props.addPlant({ prop: 'genusSpecies', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Common Name"
            placeholder="Paperbush"
            value={this.props.commonName}
            onChangeText={value =>
              this.props.addPlant({ prop: 'commonName', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Nickname"
            placeholder="Betty White"
            value={this.props.nickname}
            onChangeText={value =>
              this.props.addPlant({ prop: 'nickname', value })
            }
          />
        </CardSection>

        <CardSection>
          <Input
            editable={false}
            label="Tasks"
            value={`${this.props.taskType} ${this.props.taskFrequency} ${
              this.props.taskInterval
            }`}
          />
        </CardSection>
        <CardSection>
          {this.props.plantImages &&
            map(this.props.plantImages, (uri, id) => (
              <Image
                key={id}
                style={{ width: 100, height: 100 }}
                source={{ uri }}
                onError={e => {
                  console.log(e.nativeEvent.error);
                }}
              />
            ))}
        </CardSection>

        <CardSection style={{ flexDirection: 'row' }}>
          <Text style={styles.pickerLabelStyle}>Add A Task</Text>
          <Picker
            selectedValue={this.props.taskType}
            style={{ flex: 1 }}
            onValueChange={value =>
              this.props.addPlant({ prop: 'taskType', value })
            }
          >
            <Picker.Item label="Water" value="water" />
            <Picker.Item label="Repot" value="repot" />
            <Picker.Item label="Fertilize" value="fertilize" />
            <Picker.Item label="Prune" value="prune" />
            <Picker.Item label="Harvest" value="harvest" />
            <Picker.Item label="Sow" value="sow" />
          </Picker>
          <Picker
            selectedValue={this.props.taskFrequency}
            style={{ flex: 1 }}
            onValueChange={value =>
              this.props.addPlant({ prop: 'taskFrequency', value })
            }
            // {  itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Helvetica", fontSize:17}}}
          >
            <Picker.Item label="1 x per" value="1" />
            <Picker.Item label="2 x per" value="2" />
            <Picker.Item label="3 x per" value="3" />
            <Picker.Item label="4 x per" value="4" />
            <Picker.Item label="5 x per" value="5" />
            <Picker.Item label="6 x per" value="6" />
          </Picker>
          <Picker
            selectedValue={this.props.taskInterval}
            style={{ flex: 1 }}
            onValueChange={value =>
              this.props.addPlant({ prop: 'taskInterval', value })
            }
          >
            <Picker.Item label="Day" value="day" />
            <Picker.Item label="Week" value="week" />
            <Picker.Item label="Month" value="month" />
            <Picker.Item label="Year" value="year" />
          </Picker>
        </CardSection>

        <CardSection>
          <Button onUserPress={() => Actions.takePhoto()}>Add Photo</Button>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 14,
    justifyContent: 'center',
  },
};

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

export default connect(
  mapStateToProps,
  { addPlant }
)(PlantForm);
