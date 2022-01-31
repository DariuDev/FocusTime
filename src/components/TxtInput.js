import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const TxtInput = () => {
  return (
    <View style={styles.mainView}>
      <View>
        <TextInput placeholderTextColor="#FFFFFF" style={styles.txtInput} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    position: 'absolute',
    left: '5%',
    right: '15%',
    
  },
  txtInput: {
    marginRight: '5%',
    borderWidth: 1,
    borderColor: '#0000FF',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
});

export default TxtInput;
