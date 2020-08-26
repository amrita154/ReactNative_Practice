import React from 'react';
import {Text, View, Button, TouchableOpacity,StyleSheet} from 'react-native';

class ButtonFunction extends React.Component {
  render() {
    let rows = [];
    for (i = 0; i < 4; i++) {
      let row = [];
      for (j = 0; j < 3; j++) {
        row.push(
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>
              i+j+1
            </Text>
          </TouchableOpacity>,
        );
      }
      rows.push(<View style={styles.row}>{row}</View>);
    }
    return rows;
  }
}

const styles = StyleSheet.create({
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
  },
});
export default ButtonFunction;
