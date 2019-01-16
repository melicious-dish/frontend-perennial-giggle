import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';


const Confirm = ({ children, visible, onAccept, onDecline }) => {
  return (
    <Modal
      visible={visible}
      transparent
      annimationType='slide'
      onRequestClose={() => {}}
    >
      <View>
        <CardSection>
          <Text>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onUserPress={onAccept}>Yes</Button>
          <Button onUserPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

export { Confirm };
