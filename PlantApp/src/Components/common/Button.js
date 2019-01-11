import React from 'react'
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onUserPress, children }) => {
  const { buttonStyle, textStyle  } = styles;

  return (
    <TouchableOpacity onPress={ onUserPress }
      style={buttonStyle}>
      <Text style={textStyle}>
        {children} </Text>
    </TouchableOpacity>
  )
};


const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 20
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    borderRadius: 1,
    marginLeft: 1,
    marginRight: 1,
  }
};
export { Button };
