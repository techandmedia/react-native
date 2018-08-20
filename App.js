/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// export default class App extends Component<Props> {
export default class App extends Component {
  state = {
    greeting: "Welcome Cool Guy"
  }

  // updateGreeting() { < harus pakai bind(this) waktu dipanggil
  // atau ganti dengan arrow function
  updateGreeting = () => {
    this.setState(
      {
        greeting: "New Greeting"
      }
    )
  }
// atau dengan bind method updateGreeting ke this Class (naik scope ke atas)
// jika tanpa arrow function
  // updateGreeting = this.updateGreeting.bind(this)
  // updateGreeting() {
  //   this.setState(
  //     {
  //       greeting: "New Greeting"
  //     }
  //   )
  // }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Eko Andri!</Text>
        <Text style={styles.instructions}>{this.state.greeting}</Text>
        {/* <Text onPress={this.updateGreeting.bind(this)}>Change Greeting</Text> */}
        <Text onPress={this.updateGreeting}>Change Greeting</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "red",
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
