import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
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

    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{fontSize: 25, fontWeight: 'bold'}}>{"\n"}Available Tasks</Text>

      <ScrollView horizontal={true} style={{flex: 0.1}}> 
      <TouchableOpacity onPress={() => Alert.alert('Sweep the floor','$5')}>
      <Image style={styles.tinyLogo} source={require('./Images/sweep.png')} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Wash the dishes: $8')}>
      <Image style={styles.tinyLogo} source={require('./Images/dishes.png')} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Put the laundry away: $10')}>
      <Image style={styles.tinyLogo} source={require('./Images/laundry.png')} /> 
      </TouchableOpacity>
      </ScrollView> 
      
      
      <TouchableOpacity
      style={styles.buttonRequestTask}
      activeOpacity={0.5}>
        <Image source={require('./Images/thumb.png')}
        style={styles.buttonRequestImageIconStyle}
        />
        <View style={styles.buttonRequestIconSeparatorStyle} />
        <Text style={styles.buttonRequestTextStyle}>COMPLETED TASKS</Text>
      </TouchableOpacity>
      

      <View style={{flex: 0.1}}/>
      <TouchableOpacity
      style={styles.buttonRequestTask}
      activeOpacity={0.5}
      onPress={() => Alert.alert('A message has sent to your parents.')}>
        <Image source={require('./Images/notify.png')}
        style={styles.buttonRequestImageIconStyle}
        />
        <View style={styles.buttonRequestIconSeparatorStyle} />
        <Text style={styles.buttonRequestTextStyle}>REQUEST NEW TASKS</Text>
      </TouchableOpacity>

      <View style={{flex: 0.1}}/>
      <View style={{flexDirection: 'row', textAlign: 'left'}}>
        <Image source={require('./Images/mark.png')} style={{width: 40, height: 40}} />
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Notification from Mom:</Text>
      </View>
      <View style={{paddingRight: 105, flexDirection: 'row', textAlign: 'left'}}>
        <Image source={require('./Images/dot.png')} style={{width: 23, height: 23}} />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}> Sweep the floor</Text>
      </View>
      <View style={{flex: 0.01}} />
      <View style={{ flexDirection: 'row', textAlign: 'left'}}>
        <Image source={require('./Images/dot.png')} style={{width: 23, height: 23}} />
        <Text style={{fontSize: 18, fontWeight: 'bold'}}> Wash the dishes before 5 pm</Text>
      </View>
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
  tinyLogo: {
    width: 200,
    height: 200,
    margin: 5
  },
  buttonRequestTask:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonRequestImageIconStyle:{
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
  buttonRequestTextStyle: {
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
    marginRight: 10, 
  },
  buttonRequestIconSeparatorStyle:{
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
})
