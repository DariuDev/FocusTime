import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const TxtInput = () => {
  return (
    <TouchableOpacity style={styles.mainView}>
      <Text style={styles.txt}>+</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    right: '5%',
    left: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: '60%',
    borderWidth: 1,
    borderColor: '#0000FF',
  },
  txt: {
    color: '#0000FF',
    fontSize: 20,
  },
});

export default TxtInput;
