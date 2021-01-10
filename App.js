import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Overlay } from 'react-native-elements';

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    padding: 30
  },
  space: {
    width: 20, // or whatever size you need
    height: 20,
  }
});

const taskStyles = StyleSheet.create({
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

const wishStyles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    backgroundColor: "#ffffff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 20
  },
  title: {
    fontSize: 40,
    fontFamily: "Arial Rounded MT Bold",
    color: "#40344B"
  },
  icon: {
    width: 60,
    height: 60
  },
  icons: {
    width: 90,
    height: 90
  },
  scroll: {
    flex: 1
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
    backgroundColor: "#8BED4F"
  },
  barTxt: {
    zIndex: 99
  },
  smallTxt: {
    marginTop: 7,
    fontSize: 10
  },
  btmContainer: {
    width: "102%",
    height: 90,
    position: 'absolute',
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#43484d",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3, 
  },
  addIcon: {
    width: 100,
    height: 100,
  },
  addOverlay: {
    width: 230,
    height: 230,
    alignItems: "center"
  },
  save: {
    marginRight: 5
  },
  input: {
    marginTop: 25,
    marginBottom: 25,
    fontSize: 30
  },
  saveBtn: {
    width: 70,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#ffc23f",
    alignItems: "center",
    justifyContent: "center"
  },
  saveTxt: {
    fontSize: 20
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
    </View>
  );
}

// wish list code
function WishListScreen() {
  const [visible, setVisible] = useState(false);
  const [value, onChangeText] = React.useState('Amount');

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={wishStyles.container}>
      <View style={wishStyles.header}>
        <Text style={wishStyles.title}>Wish List</Text>
        <Image source={require('./assets/magic-wand.png')} style={wishStyles.icon}/>
      </View>

      <Overlay isVisible={visible}>
        <View style={wishStyles.addOverlay}>
          {/* <Text style={[wishStyles.title, wishStyles.save]}>Save</Text> */}
          <Image source={require('./assets/piggy-bank.png')} style={wishStyles.addIcon}/>
          <TextInput style={wishStyles.input} placeholder="$ amount to save"/>
          <TouchableOpacity onPress={toggleOverlay}>
            <View style={wishStyles.saveBtn}>
              <Text style={wishStyles.saveTxt}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Overlay>

      <View style={wishStyles.wishes}>
        {/* <Wish saved="10" total="90" img="./assets/game-console.png"></Wish> */}
        <TouchableOpacity onPress={toggleOverlay}>
        {/* <TouchableOpacity> */}
          <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
            <Card.Image source={require('./assets/game-console.png')} style={wishStyles.icons}></Card.Image>
            <Card.Title style={wishStyles.wishTitle}>Animal Crossing</Card.Title>
            <View style={wishStyles.progressBar}>
              <View style={[wishStyles.bar, {width: "22%"}]}></View>
              <Text style={wishStyles.barTxt}>22%</Text>
            </View>
            <Text style={wishStyles.smallTxt}>$20/$90 saved</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
            <Card.Image source={require('./assets/sneakers.png')} style={wishStyles.icons}></Card.Image>
            <Card.Title style={wishStyles.wishTitle}>New Sneakers</Card.Title>
            <View style={wishStyles.progressBar}>
              <View style={[wishStyles.bar, {width: "35%"}]}></View>
              <Text style={wishStyles.barTxt}>35%</Text>
            </View>
            <Text style={wishStyles.smallTxt}>$35/$100 saved</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
            <Card.Image source={require('./assets/movie.png')} style={wishStyles.icons}></Card.Image>
            <Card.Title style={wishStyles.wishTitle}>Movie Ticket</Card.Title>
            <View style={wishStyles.progressBar}>
              <View style={[wishStyles.bar, {width: "50%"}]}></View>
              <Text style={wishStyles.barTxt}>50%</Text>
            </View>
            <Text style={wishStyles.smallTxt}>$5/$10 saved</Text>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity>
          <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
            <Card.Image source={require('./assets/pizza.png')} style={wishStyles.icons}></Card.Image>
            <Card.Title style={wishStyles.wishTitle}>Pizza Delivery</Card.Title>
            <View style={wishStyles.progressBar}>
              <View style={[wishStyles.bar, {width: "92%"}]}></View>
              <Text style={wishStyles.barTxt}>92%</Text>
            </View>
            <Text style={wishStyles.smallTxt}>$13/$14 saved</Text>
          </Card>
        </TouchableOpacity>
      </View>

      <View style={wishStyles.btmContainer}>
        <TouchableOpacity>
          <Image source={require('./assets/wish-icon.png')} style={wishStyles.addIcon}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// couldn't get require working with a variable
// error module not found './assets/game-console.png'
// function Wish(props) {
  
//   var percent = Math.floor((parseFloat(props.saved) / parseFloat(props.total)) * 100);
//   var pctStr = percent + "%";
//   var radius = 10;
//   if (percent < 20) {
//     radius = 30
//   }

//   return (
//     <TouchableOpacity>
//       <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
//         <Card.Image source={require("./assets/game-console.png")} style={wishStyles.icons}></Card.Image>
//         <Card.Title style={wishStyles.wishTitle}>Animal Crossing</Card.Title>
//         <View style={wishStyles.progressBar}>
//           <View style={[wishStyles.bar, {width: pctStr, borderRadius: radius}]}></View>
//           <Text style={wishStyles.barTxt}>{percent}%</Text>
//         </View>
//         <Text style={wishStyles.smallTxt}>${props.saved}/${props.total} saved</Text>
//       </Card>
//     </TouchableOpacity>
//   );
// }

function TasksScreen() {
  return (
    
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{fontSize: 25, fontWeight: 'bold'}}>{"\n"}Available Tasks</Text>

      <ScrollView horizontal={true} style={{flex: 0.1}}> 
      <TouchableOpacity onPress={() => Alert.alert('Sweep the floor: $5')}>
      <Image style={taskStyles.tinyLogo} source={require('./Images/sweep.png')} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Wash the dishes: $8')}>
      <Image style={taskStyles.tinyLogo} source={require('./Images/dishes.png')} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert('Put the laundry away: $10')}>
      <Image style={taskStyles.tinyLogo} source={require('./Images/laundry.png')} /> 
      </TouchableOpacity>
      </ScrollView> 
      
      <TouchableOpacity
      style={taskStyles.buttonRequestTask}
      activeOpacity={0.5}>
        <Image source={require('./Images/thumb.png')}
        style={taskStyles.buttonRequestImageIconStyle}
        />
        <View style={taskStyles.buttonRequestIconSeparatorStyle} />
        <Text style={taskStyles.buttonRequestTextStyle}>COMPLETED TASKS</Text>
      </TouchableOpacity>

      <View style={{flex: 0.1}}/>
      <TouchableOpacity
      style={taskStyles.buttonRequestTask}
      activeOpacity={0.5}>
        <Image source={require('./Images/notify.png')}
        style={taskStyles.buttonRequestImageIconStyle}
        />
        <View style={taskStyles.buttonRequestIconSeparatorStyle} />
        <Text style={taskStyles.buttonRequestTextStyle}>REQUEST NEW TASKS</Text>
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

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Wish List Wizard"}} />
        <Stack.Screen name="WishList" component={WishListScreen} options={{title: "Wish List Wizard"}} />
        <Stack.Screen name="Tasks" component={TasksScreen} options={{title: "Wish List Wizard"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;