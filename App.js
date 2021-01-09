import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      <Text>Home Screen</Text>
      <Button
        title="WishList"
        onPress={() => navigation.navigate('WishList')}
      />
      <View style={styles.space} />
      <Button
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />
      <View style={styles.space} />
      <Button
        title="Donate"
        onPress={() => navigation.navigate('Donate')}
      />
    </View>
  );
}

function WishListScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wish Screen</Text>
    </View>
  );
}

function TasksScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tasks Screen</Text>
    </View>
  );
}

function DonateScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Wish Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WishList" component={WishListScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
})
