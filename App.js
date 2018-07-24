import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import openSocket from 'socket.io-client';

const socket = openSocket('https://pong-server-maxhoa.c9users.io');

const api_url = 'http://54.187.164.83:8080/api/hellos/Hello';

export default class App extends React.Component {
  render() {
    function a_hello(){
        let hi = '';
        fetch(api_url).then( raw => {
            raw.json().then(parsed => {
                alert(parsed);
                hi = parsed;
            })
        });
        return (
            <Text></Text>
        )
    }
    function a_ping(){
        socket.emit('pinged', function (data) {
            console.log(data); // data will be 'woot'
            alert(data);
        });
    }
    return (
      <View style={styles.container}>
        <Text>Pong 1618 Week 1 - React Native App</Text>
        <Text>Best Group</Text>
        <Text>Tap 'Hello' below...</Text>
        <Button
          onPress={a_hello}
          title="Hello"
          color="#841584"
          accessibilityLabel="Greetings"
        />
        <Button
          onPress={a_ping}
          title="Ping"
          color="#000000"
          accessibilityLabel="ping ping ... ?"
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
