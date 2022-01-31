import React from 'react';
import TxtInput from '../../components/TxtInput';
import {View, Text, StyleSheet} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
const Focus = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.titleView}>
        <Text style={styles.textTitle}>what would you like to focus on!?</Text>
      </View>
      <View style={styles.inputButton}>
        <TxtInput />
        <RoundedButton />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ADD8E6',
  },
  titleView: {
    alignItems: 'center',
    fontSize: 20,
    marginTop: '5%',
  },
  textTitle: {
    fontSize: 20,
    color: '#0000FF',
    fontWeight: 'bold',
  },
  inputButton: {
    marginTop: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
  },
});

export default Focus;
