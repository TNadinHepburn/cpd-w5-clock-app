import { Alert, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect  } from 'react';
import Button from '../components/button';

export default function Timer(props) {
    const [centisecs, setCentisecs] = useState(props.route.params.seconds * 100);
    const [startTime, setStartTime] = useState(Date.now());
    const [totalCentiseconds, setTotalCentiseconds] = useState(props.route.params.seconds * 100);
    const [isCounting, setStartStop] = useState(true);
    const { navigate } = props.navigation
    const formatNumeric = (x) => ('0' + x).slice(-2);
    useEffect(() => {
        if (centisecs <= 0) {
          Alert.alert('Timer Finished!', '', [{text: 'OK', onPress: () => navigate('TimerInput')}])
        } 
        else if (isCounting) {
            setTimeout(() => {  setCentisecs(Math.floor(totalCentiseconds - (Date.now() - startTime) / 10))}, 10);
        };
    });  

return (
  <View style={styles.container}>
    <View style={styles.clock}>
      <Text style={styles.digits}>{formatNumeric(Math.floor(centisecs / 360000))}:{formatNumeric(Math.floor((centisecs % 360000) / 6000))}:{formatNumeric(Math.floor((centisecs % 6000) / 100))}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Button title={isCounting ? "Stop" : "Start"} style={{backgroundColor: isCounting ? "#ed3b53" : "#60bd31"}} onPress={() => (setStartStop(!isCounting))} />
      <Button title="Reset" onPress={() => (navigate("TimerInput"))} />
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