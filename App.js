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
      intermediateText:''
    };
  }
  buttonPressed(num) {
    //console.log(num);
    if (num != '=') {
      this.setState({
        calculationText: this.state.calculationText + num,
      });
    } else {
      this.setState({
        resultText:this.state.resultText+this.state.calculationText
      });
      var n=0;
      var str=this.state.resultText;
      var nums=[];
      for(let i=0;i<str.length;i++)
      {
        var a=0;
        while(str[i]>='0'&&str[i]<='9')
        {
          a=a*10+(str[i]-'0');
        }
        nums.push(a);
        

      }

    }
  }

  operationPerformed(text) {
   this.setState({
     resultText:this.state.calculationText+text,
     calculationText:'',
   }) 
   console.log(this.state.intermediateText)

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
    let operator = ['+', '-', '/', '*'];
    for (let i = 0; i < 4; i++) {
      ops.push(
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.operationPerformed(operator[i])}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
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
    backgroundColor: 'red',
  },
  calculation: {
    flex: 2,
    backgroundColor: 'green',
  },
  button: {
    flex: 4,
    flexDirection: 'row',
  },
  numbers: {
    flex: 4,
    backgroundColor: 'yellow',

    padding: 40,
  },
  operations: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    fontSize: 30,
    fontWeight: 'bold',
  },

  calculationText: {
    fontSize: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 40,
  },
  resultText: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontSize: 30,
    padding: 20,
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
    paddingLeft: 20,
  },
});

export default App;
