import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Focus from './src/features/focus/Focus';

function App() {
  return (
    <View style={styles.mainView}>
      <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
