/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let rows = [];
  let nums = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0, 0, '='],
  ];
  let operations = ['+', '-', '*', '/'];
  let ops = [];
  for (let i = 0; i < 4; i++) {
    ops.push(
      <TouchableOpacity style={styles.btn}>
        <Text style={(styles.btntext, styles.white)}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(<View style={styles.row}>{row}</View>);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*4</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>44</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  btntext: {
    fontSize: 30,
  },
  container: {
    flex: 1,
  },
  calculationText: {
    fontSize: 24,
    color: 'white',
  },
  resultText: {
    fontSize: 30,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'red',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: 'yellow',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'blue',
  },
  white: {
    color: 'white',
  },
});

export default App;
