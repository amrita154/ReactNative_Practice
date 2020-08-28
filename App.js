import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      calculationText: '',
      resultText: '',
    };
  }

  validateText() {
    str = this.state.calculationText;
    switch (str.slice(-1)) {
      case '+':
      case '-':
      case '/':
      case '*':
        return false;
    }
    return true;
  }

  //on pressing the numbers
  buttonPressed(num) {
    //console.log(num);
    if (num != '=') {
      if(this.state.calculationText.length<90){
      this.setState({
        calculationText: this.state.calculationText + num,
      });}
      
    } else {
      this.setState({
        resultText: this.validateText() && eval(this.state.calculationText),
      });
    }
  }

  //on pressing the operators
  operationPerformed(text) {
    if (text == 'DEL') {
      this.setState({
        resultText: '',
        calculationText: '',
      });
    } else {
      this.setState({
        calculationText: this.state.calculationText + text,
      });
    }
  }

  render() {
    let rows = [];
    let nums = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      ['.', 0, '='],
    ];
    var n = [];
    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.buttonPressed(nums[i][j])}>
            <Text
              id="sample"
              style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              {nums[i][j]}
            </Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    let ops = [];
    let operator = ['+', '-', '/', '*', 'DEL'];
    for (let i = 0; i < 5; i++) {
      ops.push(
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.operationPerformed(operator[i])}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'white',
            }}>
            {operator[i]}
          </Text>
        </TouchableOpacity>,
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>
            {this.state.calculationText}
          </Text>
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.button}>
          <View style={styles.numbers}>{rows}</View>
          <View style={styles.operations}>{ops}</View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 0.5,
    backgroundColor: 'white',
  },
  calculation: {
    flex: 2,
    backgroundColor: 'white',
  },
  button: {
    flex: 4,
    flexDirection: 'row',
  },
  numbers: {
    flex: 4,
    backgroundColor: 'gray',

    padding: 40,
  },
  operations: {
    flex: 2,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    fontSize: 30,
    fontWeight: 'bold',
  },

  calculationText: {
    fontSize: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 30,
  },
  resultText: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 30,
    padding: 10,
    color:'gray'
  },
  numberButton: {
    backgroundColor: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    fontSize: 30,
    fontWeight: 'bold',
  },
  btn: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    paddingLeft: 30,
  },
});

export default App;
