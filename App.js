import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Stopwatch from './screens/Stopwatch';
import TimerInput from './screens/TimerInput';
import Timer from './screens/Timer';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const TabNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Stopwatch" 
        component={Stopwatch} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="timer" color={color} size={size}/>
      )}}/>
      <Tab.Screen 
        name="TimerNav" 
        component={TimerNav}
        options={{
        tabBarLabel: 'Timer',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="av-timer" color={color} size={size}/>
        )}}
      />
    </Tab.Navigator>
  );
};

const TimerNav = () => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name="TimerInput" component={TimerInput} />
      <Stack.Screen name="Timer" component={Timer} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
