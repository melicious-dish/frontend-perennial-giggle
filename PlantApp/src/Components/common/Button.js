import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onUserPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onUserPress} style={buttonStyle}>
      <Text style={textStyle}>{children} </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#446529',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f5f7f3',
    borderColor: '#446529',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: 1,
    marginRight: 1,
  },
};
export { Button };
