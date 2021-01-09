import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  },
  wishScreen: {
    flex: 1, 
    alignItems: 'center'
  }
});

const wishStyles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 40
  },
  title: {
    fontSize: 40
  },
  icon: {
    width: 60,
    height: 60
  }
});

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
    <View style={wishStyles.container}>
      <View style={wishStyles.header}>
        <Text style={wishStyles.title}>Wish List</Text>
        <Image source={require('./assets/magic-wand.png')} style={wishStyles.icon}/>
      </View>
      <View>
        
      </View>
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
      <Text>Donate Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* made wishlist home screen for ease of use */}
        <Stack.Screen name="WishList" component={WishListScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen name="Donate" component={DonateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
