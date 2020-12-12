/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
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
  const [resultText, setResultText] = useState('');
  const [calculationText, setCalculationText] = useState('');

  let rows = [];
  let nums = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ['.', 0, '='],
  ];

  //For the numbers pad
  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      row.push(
        <TouchableOpacity
          key={nums[i][j]}
          onPress={() => buttonPressed(nums[i][j])}
          style={styles.btn}>
          <Text style={styles.btntext}>{nums[i][j]}</Text>
        </TouchableOpacity>,
      );
    }
    rows.push(
      <View key={i} style={styles.row}>
        {row}
      </View>,
    );
  }
  // For the operations column
  let operations = ['Del', '+', '-', '*', '/'];
  let ops = [];
  for (let i = 0; i < 5; i++) {
    ops.push(
      <TouchableOpacity
        key={operations[i]}
        style={styles.btn}
        onPress={() => operate(operations[i])}>
        <Text style={(styles.btntext, styles.white)}>{operations[i]}</Text>
      </TouchableOpacity>,
    );
  }

  const calculateResult = () => {
    const text = resultText;
    //can use teval here as we have taken care of the input here
    setCalculationText(`${eval(text)}`);
  };

  const validate = () => {
    const text = resultText;
    switch (text.slice(-1)) {
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  };

  const buttonPressed = (text) => {
    if (text == '=') {
      return validate() && calculateResult();
    }
    setResultText(`${resultText}${text}`);
  };

  const operate = (operation) => {
    switch (operation) {
      case 'Del':
        let text = resultText.split('');
        text.pop();
        setResultText(text.join(''));
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        const lastChar = resultText.split('').pop();
        if (operations.indexOf(lastChar) > 0) return;
        if (resultText == '') return;
        setResultText(`${resultText}${operation}`);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{calculationText}</Text>
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
    color: 'white',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  calculationText: {
    fontSize: 30,
    color: 'black',
  },
  resultText: {
    fontSize: 36,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  result: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  calculation: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#434343',
    color: 'white',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'orange',
  },
  white: {
    color: 'white',
    fontSize: 30,
  },
});

export default App;
