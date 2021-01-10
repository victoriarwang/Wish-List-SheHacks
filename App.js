import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Card } from 'react-native-elements';

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
    marginTop: 40,
    marginBottom: 20
  },
  title: {
    fontSize: 40
  },
  icon: {
    width: 60,
    height: 60
  },
  icons: {
    width: 90,
    height: 90
  },
  wishes: {
    width: "87%",
    flex: 1, 
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
  },
  wishOuter: {
    width: 150,
    height: 220,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3, 
    alignItems: "center",
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 15,
    marginTop: 0
  },
  wishInner: {
    alignItems: "center"
  },
  wishTitle: {
    fontSize: 20
  },
  progressBar: {
    height: 22,
    width: 110,
    borderColor: '#43484d',
    borderWidth: 1.75,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  bar: {
    position: 'absolute',
    left: 0, 
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: "#8BED4F",
    width: "50%"
  },
  barTxt: {
    zIndex: 99
  },
  smallTxt: {
    marginTop: 7,
    fontSize: 10
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

      <View style={wishStyles.wishes}>
        <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
          <Card.Image source={require('./assets/game-console.png')} style={wishStyles.icons}></Card.Image>
          <Card.Title style={wishStyles.wishTitle}>Animal Crossing</Card.Title>
          <View style={wishStyles.progressBar}>
            <View style={wishStyles.bar}></View>
            <Text style={wishStyles.barTxt}>50%</Text>
          </View>
          <Text style={wishStyles.smallTxt}>$45/$90 saved</Text>
        </Card>

        <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
          <Card.Image source={require('./assets/sneakers.png')} style={wishStyles.icons}></Card.Image>
          <Card.Title style={wishStyles.wishTitle}>New Sneakers</Card.Title>
          <View style={wishStyles.progressBar}>
            <View style={wishStyles.bar}></View>
            <Text style={wishStyles.barTxt}>50%</Text>
          </View>
          <Text style={wishStyles.smallTxt}>$50/$100 saved</Text>
        </Card>

        <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
          <Card.Image source={require('./assets/movie.png')} style={wishStyles.icons}></Card.Image>
          <Card.Title style={wishStyles.wishTitle}>Movie Ticket</Card.Title>
          <View style={wishStyles.progressBar}>
            <View style={wishStyles.bar}></View>
            <Text style={wishStyles.barTxt}>50%</Text>
          </View>
          <Text style={wishStyles.smallTxt}>$5/$10 saved</Text>
        </Card>
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
