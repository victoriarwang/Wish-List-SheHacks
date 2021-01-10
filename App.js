import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card, Overlay } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  gear: {
    width: 35, height: 35,
    marginLeft: 280, marginTop: 25,
  },
  logo: {
    width: 180, height: 180, 
    left: 10, top: 0,
  },
  welcomeEmma: {
    fontFamily: 'Verdana',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#157145',
  },
  hide: {
    color: 'rgb(155, 208, 229)',
  },
  pfp: {
    width: 100, height: 100, top: -20,
  },
  box: {
    width: 414, height: 230,
    backgroundColor: 'rgb(155, 208, 229)',
    marginTop: -100,
    position: 'absolute',
    borderRadius: 30,
  },
  navbar: {
    width: 414, height: 300,
    backgroundColor: 'rgb(155, 208, 229)',
    borderRadius: 30,
    marginTop: 682,
    position: 'absolute',
  },
  balance: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: -540,
    marginLeft: -40,
    position: 'absolute',
  },
  currentBalance: {
    fontFamily: 'Verdana',
    color: '#698eae',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: -120,
    marginLeft: -100,
    position: 'absolute',
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 1,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#157045',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 65,
    borderRadius: 10,
    margin: 5,
    marginTop: -60,
  },
  button2: {
    marginTop: -40
  },
  buttonImageIconStyle: {
    padding: 20,
    margin: 10,
    height: 25,
    width: 20,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 40,
    marginRight: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 2,
    height: 80,
  },
  circle: {
    marginTop: -70,
    marginLeft: 60,
    position: 'absolute',
    alignItems: 'center',
    width: 300,
    height: 200,
    borderRadius: 80,
    backgroundColor: 'rgb(155, 208, 229)',
 },
 circleleft: {
    marginTop: 80,
    marginLeft: 100,
    position: 'absolute',
    alignItems: 'center',
    width: 100,
    height: 200,
    borderRadius: 80,
    backgroundColor: 'rgb(155, 208, 229)',
 },
 circleright: {
  marginTop: 80,
  marginLeft: 400,
  position: 'absolute',
  alignItems: 'center',
  width: 100,
  height: 200,
  borderRadius: 80,
  backgroundColor: 'rgb(155, 208, 229)',
},
 loginScreenButton:{
  marginRight:40,
  marginLeft:40,
  marginTop:17,
  paddingTop:50,
  paddingBottom:60,
  paddingLeft:210,
  paddingRight:50,
  backgroundColor:'#157045',
  borderRadius:80,
},
loginTextSave:{
    color:'#fff',
    textAlign:'center',
    top: -10,
    left: -60,
    fontSize: 25,
    fontWeight: 'bold',

},
loginTextSpend:{
  color:'#fff',
  textAlign:'center',
  top: 103,
  left: -125,
  fontSize: 25,
  fontWeight: 'bold',
},
loginTextShare:{
  color:'#fff',
  textAlign:'center',
  top: 73,
  left: 76,
  fontSize: 25,
  fontWeight: 'bold',
},
triangle: {
  width: 0,
  height: 0,
  marginLeft: 0,
  marginTop: 122,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderRightWidth: 110,
  borderBottomWidth: 80,
  borderLeftWidth: 110,
  borderTopColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: '#157045',
  borderLeftColor: 'transparent',
  transform: [{ rotate: '180deg'}],
  position: 'absolute',
},
left: {
  marginTop: 50,
  marginLeft: -140,
  width: 105, height: 50,
  borderRadius: 40,
},
right: {
  marginTop: -46,
  marginLeft: 215,
  width: 100, height: 50,
  borderRadius: 40,
},
save: {
  marginTop: -210,
  marginLeft: 25,
  width: 70, height: 70,
  borderRadius: 40,
  position: 'absolute',
},
savetext: {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
  marginLeft: -80,
  marginTop: -75,
},
spend: {
  marginTop: -60,
  marginLeft: -160,
  width: 45, height: 45,
  borderRadius: 40,
},
spendtext: {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
  marginLeft: 180,
  marginTop: 181,
  position: 'absolute',
},
share: {
  marginTop: 100,
  marginLeft: 110,
  width: 40, height: 40,
  borderRadius: 40,
  position: 'absolute',
},
sharetext: {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
  marginLeft: -200,
  marginTop: 57,
  position: 'absolute',
},
donatetext: {
  fontSize: 25,
  fontWeight: 'bold',
  color: 'white',
  marginTop: 7,
  marginLeft: 315,
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
  nameInput: {
    marginTop: 5,
    fontSize: 25
  },
  amountInput: {
    marginTop: 5,
    marginBottom: 25,
    fontSize: 25
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
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.box}>
        <Text style={styles.hide}>
          hi!
        </Text>
      </SafeAreaView>
      <View>
        <Image
        style={styles.gear}
          source={require('./assets/gear.png')}
        />
      </View>
      <View>
        <Image
          style={styles.pfp}
          source={require('./assets/girl.png')}
        />
      </View>
      <View>
        <Text style={styles.welcomeEmma}>
          WELCOME EMMA!
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/piggybank.png')}
        />
      </View>
      <View><Text style={styles.currentBalance}>Current Balance</Text></View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('WishList')}
          style={styles.button}
          activeOpacity={0.5}>

          <Text style={styles.buttonTextStyle}>
            Wish List
          </Text>
          <View style={styles.buttonIconSeparatorStyle} />

          <Image
            source={require('./assets/wishlist.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tasks')}
          style={[styles.button, styles.button2]}
          activeOpacity={0.5}>

          <Text style={styles.buttonTextStyle}>
            Tasks
          </Text>
          <View style={styles.buttonIconSeparatorStyle} />

          <Image
            source={require('./assets/save.png')}
            style={styles.buttonImageIconStyle}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.balance}>$70.00</Text>
      </View>
      <SafeAreaView style={styles.navbar}>
      <View style={styles.circle}>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => console.log('pressed')}
          underlayColor='#fff'>
            
        </TouchableOpacity>
        
      
        <Text style={styles.savetext}>
          SAVE
        </Text>
        
      </View>

      <View style={styles.left}>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => console.log('pressed')}
          underlayColor='#fff'>
        </TouchableOpacity>
        
      </View>

      <View style={styles.right}>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => console.log('pressed')}
          underlayColor='#fff'>
        </TouchableOpacity>
      
        <Text style={styles.sharetext}>
          SHARE
        </Text>
      </View>
      
         
      <Text style={styles.donatetext}>
          SPEND
        </Text>
      </SafeAreaView>
      
      <View>
        <Image
        style={styles.save}
          source={require('./assets/save.png')}
        />
      </View>

      
      
      <StatusBar style="auto" />

    </SafeAreaView>
  );
}

// wish list code
function WishListScreen() {
  const [sVisible, sSetVisible] = useState(false);
  const [wVisible, wSetVisible] = useState(false);

  const sToggleOverlay = () => {
    sSetVisible(!sVisible);
  };
  const wToggleOverlay = () => {
    wSetVisible(!wVisible);
  };

  return (
    <View style={wishStyles.container}>
      <View style={wishStyles.header}>
        <Text style={wishStyles.title}>Wish List</Text>
        <Image source={require('./assets/magic-wand.png')} style={wishStyles.icon}/>
      </View>

      <Overlay isVisible={sVisible}>
        <View style={wishStyles.addOverlay}>
          {/* <Text style={[wishStyles.title, wishStyles.save]}>Save</Text> */}
          <Image source={require('./assets/piggy-bank.png')} style={wishStyles.addIcon}/>
          <TextInput style={wishStyles.input} placeholder="$ amount to save"/>
          <TouchableOpacity onPress={sToggleOverlay}>
            <View style={wishStyles.saveBtn}>
              <Text style={wishStyles.saveTxt}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Overlay>

      <Overlay isVisible={wVisible}>
        <View style={wishStyles.addOverlay}>
          <TouchableOpacity>
            <Image source={require('./assets/add-image.png')} style={wishStyles.addIcon}/>
          </TouchableOpacity>
          <TextInput style={wishStyles.nameInput} placeholder="item name"/>
          <TextInput style={wishStyles.amountInput} placeholder="$ amount needed"/>
          <TouchableOpacity onPress={wToggleOverlay}>
            <View style={wishStyles.saveBtn}>
              <Text style={wishStyles.saveTxt}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Overlay>

      <View style={wishStyles.wishes}>
        {/* <Wish saved="10" total="90" img="./assets/game-console.png"></Wish> */}
        <TouchableOpacity onPress={sToggleOverlay}>
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

        <TouchableOpacity onPress={sToggleOverlay}>
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

        <TouchableOpacity onPress={sToggleOverlay}>
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

        <TouchableOpacity onPress={sToggleOverlay}>
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
        <TouchableOpacity onPress={wToggleOverlay}>
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

const sweepTwoButtonRequest = () =>
Alert.alert(
  "Sweep the floor",
  "Reward: $5",
  [
    {
      text: "Decline",
      onPress: () => console.log("Decline Request"),
      style: "decline"
    },
    { text: "Accept", onPress: () => console.log("Accept Request") }
  ],
  { cancelable: false }
);

const dishesTwoButtonRequest = () =>
Alert.alert(
  "Wash the dishes",
  "Reward: $8",
  [
    {
      text: "Decline",
      onPress: () => console.log("Decline Request"),
      style: "decline"
    },
    { text: "Accept", onPress: () => console.log("Accept Request") }
  ],
  { cancelable: false }
);

const laundryTwoButtonRequest = () =>
Alert.alert(
  "Put the laundry away",
  "Reward: $10",
  [
    {
      text: "Decline",
      onPress: () => console.log("Decline Request"),
      style: "decline"
    },
    { text: "Accept", onPress: () => console.log("Accept Request") }
  ],
  { cancelable: false }
);

function TasksScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>

      <Text style={{fontSize: 25, fontWeight: 'bold'}}>{"\n"}Available Tasks</Text>

      <ScrollView horizontal={true} style={{flex: 0.1}}>
      <TouchableOpacity onPress={sweepTwoButtonRequest}>
      <Image style={taskStyles.tinyLogo} source={require('./Images/sweep.png')} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={dishesTwoButtonRequest}>
      <Image style={taskStyles.tinyLogo} source={require('./Images/dishes.png')} /> 
      </TouchableOpacity>
      <TouchableOpacity onPress={laundryTwoButtonRequest}>
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
      activeOpacity={0.5}
      onPress={() => Alert.alert('Message Sent.', 'Your parents will post new tasks for you soon.')}>
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