import { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import Button from '../components/button';

export default function TimerInput(props) {

  const { navigate } = props.navigation

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 70 : 70} >
        <View style={styles.clock}>
          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={value => setHours(value)}
              value={hours}
              style={styles.input}
              keyboardType="numeric"
              />
            <Text style={styles.label}>Hours</Text>
            <TextInput
              onChangeText={value => setMinutes(value)}
              value={minutes}
              style={styles.input}
              keyboardType="numeric"
              />
            <Text style={styles.label}>Minutes</Text>
            <TextInput
              onChangeText={value => setSeconds(value)}
              value={seconds}
              style={styles.input}
              keyboardType="numeric"
              />
            <Text style={styles.label}>Seconds</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button 
            style={{backgroundColor: "#60bd31"}} 
            title="Start" onPress={() => navigate("Timer", {seconds : (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds)})} />
          <Button title="Reset" onPress={() => (setHours('00'),setMinutes('00'),setSeconds('00'))}/>
        </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    clock: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row'
    },
    digits: {
      fontSize: 60
    },
    input: {
      fontSize: 60,
      borderWidth: 1,
      borderRadius: 10,
      width: 80,
      margin: 5
    },
    inputContainer: {
      alignItems: 'center'
    },
    label: {
      fontSize: 20
    },
    buttonContainer: {
      flex: 2,
      flexDirection: 'row',
    }
});