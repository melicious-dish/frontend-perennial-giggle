import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => (
  <Modal
    visible={visible}
    transparent
    animationType="slide"
    onRequestClose={() => {}}
  >
    <View style={styles.containerStyle}>
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>{children}</Text>
      </CardSection>

      <CardSection>
        <Button onUserPress={onAccept}>Yes</Button>
        <Button onUserPress={onDecline}>No</Button>
      </CardSection>
    </View>
  </Modal>
);

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: 'Futura-Medium',
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 1,
  },
};

export { Confirm };
