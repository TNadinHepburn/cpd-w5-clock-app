import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect  } from 'react';
import Button from '../components/button';

export default function Stopwatch() {
    const [centisecs, setCentisecs] = useState(0);
    const [startTime, setStartTime] = useState(Date.now());
    const [isCounting, setStartStop] = useState(false);
    const formatNumeric = (x) => ('0' + x).slice(-2);
    useEffect(() => {
        if (isCounting) {
            setTimeout(() => {setCentisecs(Math.floor((Date.now() - startTime) / 10))}, 10);
        };
    });  

return (
  <View style={styles.container}>
    <View style={styles.clock}>
      <Text style={styles.digits}>{formatNumeric(Math.floor(centisecs / 6000))}:{formatNumeric(Math.floor((centisecs % 6000) / 100))}.{formatNumeric(centisecs % 100)}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button   title={isCounting ? "Stop" : "Start"} style={{backgroundColor: isCounting ? "#ed3b53" : "#60bd31"}} onPress={() => (setStartStop(!isCounting), setStartTime(Date.now()))} />
      <Button title="Reset"     onPress={() => (setStartStop(false), setTimeout(() => setCentisecs(0), 10))} />
    </View>
  </View>
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
    justifyContent: 'center'
  },
  digits: {
    fontSize: 60
  }, 
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
  } 
});