import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Card } from 'react-native-elements';

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
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
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
  },
  btmContainer: {
    width: "102%",
    height: 90,
    position: 'absolute',
    bottom: 0,
    flex: 1, 
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    borderColor: "#43484d",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3, 
  },
  divider: {
    borderWidth: 1,
  },
  addIcon: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 10
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

        <Card containerStyle={wishStyles.wishOuter} wrapperStyle={wishStyles.wishInner}>
          <Card.Image source={require('./assets/pizza.png')} style={wishStyles.icons}></Card.Image>
          <Card.Title style={wishStyles.wishTitle}>Pizza Delivery</Card.Title>
          <View style={wishStyles.progressBar}>
            <View style={wishStyles.bar}></View>
            <Text style={wishStyles.barTxt}>50%</Text>
          </View>
          <Text style={wishStyles.smallTxt}>$7/$14 saved</Text>
        </Card>
      </View>

      <View style={wishStyles.btmContainer}>
        <Image source={require('./assets/bank-icon.png')} style={wishStyles.addIcon}/>
        <Image source={require('./assets/wish-icon.png')} style={wishStyles.addIcon}/>
      </View>
    </View>
  );
}

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

styles1=StyleSheet.create({
  scroller: {
      flex: 1,
  }
});

function DonateScreen() {
  return (
    <ScrollView style={styles1.scroller}>
      <Text style={{fontFamily: 'Academy Engraved LET'}}>Academy Engraved LET </Text>
        <Text style={{fontFamily: 'AcademyEngravedLetPlain'}}>AcademyEngravedLetPlain </Text>
        <Text style={{fontFamily: 'Al Nile'}}>Al Nile </Text>
        <Text style={{fontFamily: 'AlNile-Bold'}}>AlNile-Bold </Text>
        <Text style={{fontFamily: 'American Typewriter'}}>American Typewriter </Text>
        <Text style={{fontFamily: 'AmericanTypewriter-Bold'}}>AmericanTypewriter-Bold </Text>
        <Text style={{fontFamily: 'AmericanTypewriter-Condensed'}}>AmericanTypewriter-Condensed </Text>
        <Text style={{fontFamily: 'AmericanTypewriter-CondensedBold'}}>AmericanTypewriter-CondensedBold </Text>
        <Text style={{fontFamily: 'AmericanTypewriter-CondensedLight'}}>AmericanTypewriter-CondensedLight </Text>
        <Text style={{fontFamily: 'AmericanTypewriter-Light'}}>AmericanTypewriter-Light </Text>
        <Text style={{fontFamily: 'Apple Color Emoji'}}>Apple Color Emoji </Text>
        <Text style={{fontFamily: 'Apple SD Gothic Neo'}}>Apple SD Gothic Neo </Text>
        <Text style={{fontFamily: 'AppleColorEmoji'}}>AppleColorEmoji </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-Bold'}}>AppleSDGothicNeo-Bold </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-Light'}}>AppleSDGothicNeo-Light </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-Medium'}}>AppleSDGothicNeo-Medium </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-Regular'}}>AppleSDGothicNeo-Regular </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-SemiBold'}}>AppleSDGothicNeo-SemiBold </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-Thin'}}>AppleSDGothicNeo-Thin </Text>
        <Text style={{fontFamily: 'AppleSDGothicNeo-UltraLight'}}>AppleSDGothicNeo-UltraLight </Text>
        <Text style={{fontFamily: 'Arial'}}>Arial </Text>
        <Text style={{fontFamily: 'Arial Hebrew'}}>Arial Hebrew </Text>
        <Text style={{fontFamily: 'Arial Rounded MT Bold'}}>Arial Rounded MT Bold </Text>
        <Text style={{fontFamily: 'Arial-BoldItalicMT'}}>Arial-BoldItalicMT </Text>
        <Text style={{fontFamily: 'Arial-BoldMT'}}>Arial-BoldMT </Text>
        <Text style={{fontFamily: 'Arial-ItalicMT'}}>Arial-ItalicMT </Text>
        <Text style={{fontFamily: 'ArialHebrew'}}>ArialHebrew </Text>
        <Text style={{fontFamily: 'ArialHebrew-Bold'}}>ArialHebrew-Bold </Text>
        <Text style={{fontFamily: 'ArialHebrew-Light'}}>ArialHebrew-Light </Text>
        <Text style={{fontFamily: 'ArialMT'}}>ArialMT </Text>
        <Text style={{fontFamily: 'ArialRoundedMTBold'}}>ArialRoundedMTBold </Text>
        <Text style={{fontFamily: 'Avenir'}}>Avenir </Text>
        <Text style={{fontFamily: 'Avenir Next'}}>Avenir Next </Text>
        <Text style={{fontFamily: 'Avenir Next Condensed'}}>Avenir Next Condensed </Text>
        <Text style={{fontFamily: 'Avenir-Black'}}>Avenir-Black </Text>
        <Text style={{fontFamily: 'Avenir-BlackOblique'}}>Avenir-BlackOblique </Text>
        <Text style={{fontFamily: 'Avenir-Book'}}>Avenir-Book </Text>
        <Text style={{fontFamily: 'Avenir-BookOblique'}}>Avenir-BookOblique </Text>
        <Text style={{fontFamily: 'Avenir-Heavy'}}>Avenir-Heavy </Text>
        <Text style={{fontFamily: 'Avenir-HeavyOblique'}}>Avenir-HeavyOblique </Text>
        <Text style={{fontFamily: 'Avenir-Light'}}>Avenir-Light </Text>
        <Text style={{fontFamily: 'Avenir-LightOblique'}}>Avenir-LightOblique </Text>
        <Text style={{fontFamily: 'Avenir-Medium'}}>Avenir-Medium </Text>
        <Text style={{fontFamily: 'Avenir-MediumOblique'}}>Avenir-MediumOblique </Text>
        <Text style={{fontFamily: 'Avenir-Oblique'}}>Avenir-Oblique </Text>
        <Text style={{fontFamily: 'Avenir-Roman'}}>Avenir-Roman </Text>
        <Text style={{fontFamily: 'AvenirNext-Bold'}}>AvenirNext-Bold </Text>
        <Text style={{fontFamily: 'AvenirNext-BoldItalic'}}>AvenirNext-BoldItalic </Text>
        <Text style={{fontFamily: 'AvenirNext-DemiBold'}}>AvenirNext-DemiBold </Text>
        <Text style={{fontFamily: 'AvenirNext-DemiBoldItalic'}}>AvenirNext-DemiBoldItalic </Text>
        <Text style={{fontFamily: 'AvenirNext-Heavy'}}>AvenirNext-Heavy </Text>
        <Text style={{fontFamily: 'AvenirNext-HeavyItalic'}}>AvenirNext-HeavyItalic </Text>
        <Text style={{fontFamily: 'AvenirNext-Italic'}}>AvenirNext-Italic </Text>
        <Text style={{fontFamily: 'AvenirNext-Medium'}}>AvenirNext-Medium </Text>
        <Text style={{fontFamily: 'AvenirNext-MediumItalic'}}>AvenirNext-MediumItalic </Text>
        <Text style={{fontFamily: 'AvenirNext-Regular'}}>AvenirNext-Regular </Text>
        <Text style={{fontFamily: 'AvenirNext-UltraLight'}}>AvenirNext-UltraLight </Text>
        <Text style={{fontFamily: 'AvenirNext-UltraLightItalic'}}>AvenirNext-UltraLightItalic </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-Bold'}}>AvenirNextCondensed-Bold </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-BoldItalic'}}>AvenirNextCondensed-BoldItalic </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-DemiBold'}}>AvenirNextCondensed-DemiBold </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-DemiBoldItalic'}}>AvenirNextCondensed-DemiBoldItalic </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-Heavy'}}>AvenirNextCondensed-Heavy </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-HeavyItalic'}}>AvenirNextCondensed-HeavyItalic </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-Italic'}}>AvenirNextCondensed-Italic </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-Medium'}}>AvenirNextCondensed-Medium </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-MediumItalic'}}>AvenirNextCondensed-MediumItalic </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-Regular'}}>AvenirNextCondensed-Regular </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-UltraLight'}}>AvenirNextCondensed-UltraLight </Text>
        <Text style={{fontFamily: 'AvenirNextCondensed-UltraLightItalic'}}>AvenirNextCondensed-UltraLightItalic </Text>
        <Text style={{fontFamily: 'Bangla Sangam MN'}}>Bangla Sangam MN </Text>
        <Text style={{fontFamily: 'Baskerville'}}>Baskerville </Text>
        <Text style={{fontFamily: 'Baskerville-Bold'}}>Baskerville-Bold </Text>
        <Text style={{fontFamily: 'Baskerville-BoldItalic'}}>Baskerville-BoldItalic </Text>
        <Text style={{fontFamily: 'Baskerville-Italic'}}>Baskerville-Italic </Text>
        <Text style={{fontFamily: 'Baskerville-SemiBold'}}>Baskerville-SemiBold </Text>
        <Text style={{fontFamily: 'Baskerville-SemiBoldItalic'}}>Baskerville-SemiBoldItalic </Text>
        <Text style={{fontFamily: 'Bodoni 72'}}>Bodoni 72 </Text>
        <Text style={{fontFamily: 'Bodoni 72 Oldstyle'}}>Bodoni 72 Oldstyle </Text>
        <Text style={{fontFamily: 'Bodoni 72 Smallcaps'}}>Bodoni 72 Smallcaps </Text>
        <Text style={{fontFamily: 'Bodoni Ornaments'}}>Bodoni Ornaments </Text>
        <Text style={{fontFamily: 'BodoniOrnamentsITCTT'}}>BodoniOrnamentsITCTT </Text>
        <Text style={{fontFamily: 'BodoniSvtyTwoITCTT-Bold'}}>BodoniSvtyTwoITCTT-Bold </Text>
        <Text style={{fontFamily: 'BodoniSvtyTwoITCTT-Book'}}>BodoniSvtyTwoITCTT-Book </Text>
        <Text style={{fontFamily: 'BodoniSvtyTwoITCTT-BookIta'}}>BodoniSvtyTwoITCTT-BookIta </Text>
        <Text style={{fontFamily: 'BodoniSvtyTwoOSITCTT-Bold'}}>BodoniSvtyTwoOSITCTT-Bold </Text>
        <Text style={{fontFamily: 'BodoniSvtyTwoOSITCTT-Book'}}>BodoniSvtyTwoOSITCTT-Book </Text>
        <Text style={{fontFamily: 'BodoniSvtyTwoSCITCTT-Book'}}>BodoniSvtyTwoSCITCTT-Book </Text>
        <Text style={{fontFamily: 'Bradley Hand'}}>Bradley Hand </Text>
        <Text style={{fontFamily: 'BradleyHandITCTT-Bold'}}>BradleyHandITCTT-Bold </Text>
        <Text style={{fontFamily: 'Chalkboard SE'}}>Chalkboard SE </Text>
        <Text style={{fontFamily: 'ChalkboardSE-Bold'}}>ChalkboardSE-Bold </Text>
        <Text style={{fontFamily: 'ChalkboardSE-Light'}}>ChalkboardSE-Light </Text>
        <Text style={{fontFamily: 'ChalkboardSE-Regular'}}>ChalkboardSE-Regular </Text>
        <Text style={{fontFamily: 'Chalkduster'}}>Chalkduster </Text>
        <Text style={{fontFamily: 'Chalkduster'}}>Chalkduster </Text>
        <Text style={{fontFamily: 'Cochin'}}>Cochin </Text>
        <Text style={{fontFamily: 'Cochin-Bold'}}>Cochin-Bold </Text>
        <Text style={{fontFamily: 'Cochin-BoldItalic'}}>Cochin-BoldItalic </Text>
        <Text style={{fontFamily: 'Cochin-Italic'}}>Cochin-Italic </Text>
        <Text style={{fontFamily: 'Copperplate'}}>Copperplate </Text>
        <Text style={{fontFamily: 'Copperplate-Bold'}}>Copperplate-Bold </Text>
        <Text style={{fontFamily: 'Copperplate-Light'}}>Copperplate-Light </Text>
        <Text style={{fontFamily: 'Courier'}}>Courier </Text>
        <Text style={{fontFamily: 'Courier New'}}>Courier New </Text>
        <Text style={{fontFamily: 'Courier-Bold'}}>Courier-Bold </Text>
        <Text style={{fontFamily: 'Courier-BoldOblique'}}>Courier-BoldOblique </Text>
        <Text style={{fontFamily: 'Courier-Oblique'}}>Courier-Oblique </Text>
        <Text style={{fontFamily: 'CourierNewPS-BoldItalicMT'}}>CourierNewPS-BoldItalicMT </Text>
        <Text style={{fontFamily: 'CourierNewPS-BoldMT'}}>CourierNewPS-BoldMT </Text>
        <Text style={{fontFamily: 'CourierNewPS-ItalicMT'}}>CourierNewPS-ItalicMT </Text>
        <Text style={{fontFamily: 'CourierNewPSMT'}}>CourierNewPSMT </Text>
        <Text style={{fontFamily: 'Damascus'}}>Damascus </Text>
        <Text style={{fontFamily: 'DamascusBold'}}>DamascusBold </Text>
        <Text style={{fontFamily: 'DamascusLight'}}>DamascusLight </Text>
        <Text style={{fontFamily: 'DamascusMedium'}}>DamascusMedium </Text>
        <Text style={{fontFamily: 'DamascusSemiBold'}}>DamascusSemiBold </Text>
        <Text style={{fontFamily: 'Devanagari Sangam MN'}}>Devanagari Sangam MN </Text>
        <Text style={{fontFamily: 'DevanagariSangamMN'}}>DevanagariSangamMN </Text>
        <Text style={{fontFamily: 'DevanagariSangamMN-Bold'}}>DevanagariSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Didot'}}>Didot </Text>
        <Text style={{fontFamily: 'Didot-Bold'}}>Didot-Bold </Text>
        <Text style={{fontFamily: 'Didot-Italic'}}>Didot-Italic </Text>
        <Text style={{fontFamily: 'DiwanMishafi'}}>DiwanMishafi </Text>
        <Text style={{fontFamily: 'Euphemia UCAS'}}>Euphemia UCAS </Text>
        <Text style={{fontFamily: 'EuphemiaUCAS-Bold'}}>EuphemiaUCAS-Bold </Text>
        <Text style={{fontFamily: 'EuphemiaUCAS-Italic'}}>EuphemiaUCAS-Italic </Text>
        <Text style={{fontFamily: 'Farah'}}>Farah </Text>
        <Text style={{fontFamily: 'Futura'}}>Futura </Text>
        <Text style={{fontFamily: 'Futura-CondensedExtraBold'}}>Futura-CondensedExtraBold </Text>
        <Text style={{fontFamily: 'Futura-CondensedMedium'}}>Futura-CondensedMedium </Text>
        <Text style={{fontFamily: 'Futura-Medium'}}>Futura-Medium </Text>
        <Text style={{fontFamily: 'Futura-MediumItalic'}}>Futura-MediumItalic </Text>
        <Text style={{fontFamily: 'Geeza Pro'}}>Geeza Pro </Text>
        <Text style={{fontFamily: 'GeezaPro-Bold'}}>GeezaPro-Bold </Text>
        <Text style={{fontFamily: 'Georgia'}}>Georgia </Text>
        <Text style={{fontFamily: 'Georgia-Bold'}}>Georgia-Bold </Text>
        <Text style={{fontFamily: 'Georgia-BoldItalic'}}>Georgia-BoldItalic </Text>
        <Text style={{fontFamily: 'Georgia-Italic'}}>Georgia-Italic </Text>
        <Text style={{fontFamily: 'Gill Sans'}}>Gill Sans </Text>
        <Text style={{fontFamily: 'GillSans-Bold'}}>GillSans-Bold </Text>
        <Text style={{fontFamily: 'GillSans-BoldItalic'}}>GillSans-BoldItalic </Text>
        <Text style={{fontFamily: 'GillSans-Italic'}}>GillSans-Italic </Text>
        <Text style={{fontFamily: 'GillSans-Light'}}>GillSans-Light </Text>
        <Text style={{fontFamily: 'GillSans-LightItalic'}}>GillSans-LightItalic </Text>
        <Text style={{fontFamily: 'GillSans-SemiBold'}}>GillSans-SemiBold </Text>
        <Text style={{fontFamily: 'GillSans-SemiBoldItalic'}}>GillSans-SemiBoldItalic </Text>
        <Text style={{fontFamily: 'GillSans-UltraBold'}}>GillSans-UltraBold </Text>
        <Text style={{fontFamily: 'Gujarati Sangam MN'}}>Gujarati Sangam MN </Text>
        <Text style={{fontFamily: 'GujaratiSangamMN'}}>GujaratiSangamMN </Text>
        <Text style={{fontFamily: 'GujaratiSangamMN-Bold'}}>GujaratiSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Gurmukhi MN'}}>Gurmukhi MN </Text>
        <Text style={{fontFamily: 'GurmukhiMN-Bold'}}>GurmukhiMN-Bold </Text>
        <Text style={{fontFamily: 'Heiti SC'}}>Heiti SC </Text>
        <Text style={{fontFamily: 'Heiti TC'}}>Heiti TC </Text>
        <Text style={{fontFamily: 'Helvetica'}}>Helvetica </Text>
        <Text style={{fontFamily: 'Helvetica Neue'}}>Helvetica Neue </Text>
        <Text style={{fontFamily: 'Helvetica-Bold'}}>Helvetica-Bold </Text>
        <Text style={{fontFamily: 'Helvetica-BoldOblique'}}>Helvetica-BoldOblique </Text>
        <Text style={{fontFamily: 'Helvetica-Light'}}>Helvetica-Light </Text>
        <Text style={{fontFamily: 'Helvetica-LightOblique'}}>Helvetica-LightOblique </Text>
        <Text style={{fontFamily: 'Helvetica-Oblique'}}>Helvetica-Oblique </Text>
        <Text style={{fontFamily: 'HelveticaNeue-Bold'}}>HelveticaNeue-Bold </Text>
        <Text style={{fontFamily: 'HelveticaNeue-BoldItalic'}}>HelveticaNeue-BoldItalic </Text>
        <Text style={{fontFamily: 'HelveticaNeue-CondensedBlack'}}>HelveticaNeue-CondensedBlack </Text>
        <Text style={{fontFamily: 'HelveticaNeue-CondensedBold'}}>HelveticaNeue-CondensedBold </Text>
        <Text style={{fontFamily: 'HelveticaNeue-Italic'}}>HelveticaNeue-Italic </Text>
        <Text style={{fontFamily: 'HelveticaNeue-Light'}}>HelveticaNeue-Light </Text>
        <Text style={{fontFamily: 'HelveticaNeue-LightItalic'}}>HelveticaNeue-LightItalic </Text>
        <Text style={{fontFamily: 'HelveticaNeue-Medium'}}>HelveticaNeue-Medium </Text>
        <Text style={{fontFamily: 'HelveticaNeue-MediumItalic'}}>HelveticaNeue-MediumItalic </Text>
        <Text style={{fontFamily: 'HelveticaNeue-Thin'}}>HelveticaNeue-Thin </Text>
        <Text style={{fontFamily: 'HelveticaNeue-ThinItalic'}}>HelveticaNeue-ThinItalic </Text>
        <Text style={{fontFamily: 'HelveticaNeue-UltraLight'}}>HelveticaNeue-UltraLight </Text>
        <Text style={{fontFamily: 'HelveticaNeue-UltraLightItalic'}}>HelveticaNeue-UltraLightItalic </Text>
        <Text style={{fontFamily: 'Hiragino Mincho ProN'}}>Hiragino Mincho ProN </Text>
        <Text style={{fontFamily: 'Hiragino Sans'}}>Hiragino Sans </Text>
        <Text style={{fontFamily: 'HiraginoSans-W3'}}>HiraginoSans-W3 </Text>
        <Text style={{fontFamily: 'HiraginoSans-W6'}}>HiraginoSans-W6 </Text>
        <Text style={{fontFamily: 'HiraMinProN-W3'}}>HiraMinProN-W3 </Text>
        <Text style={{fontFamily: 'HiraMinProN-W6'}}>HiraMinProN-W6 </Text>
        <Text style={{fontFamily: 'Hoefler Text'}}>Hoefler Text </Text>
        <Text style={{fontFamily: 'HoeflerText-Black'}}>HoeflerText-Black </Text>
        <Text style={{fontFamily: 'HoeflerText-BlackItalic'}}>HoeflerText-BlackItalic </Text>
        <Text style={{fontFamily: 'HoeflerText-Italic'}}>HoeflerText-Italic </Text>
        <Text style={{fontFamily: 'HoeflerText-Regular'}}>HoeflerText-Regular </Text>
        <Text style={{fontFamily: 'Iowan Old Style'}}>Iowan Old Style </Text>
        <Text style={{fontFamily: 'IowanOldStyle-Bold'}}>IowanOldStyle-Bold </Text>
        <Text style={{fontFamily: 'IowanOldStyle-BoldItalic'}}>IowanOldStyle-BoldItalic </Text>
        <Text style={{fontFamily: 'IowanOldStyle-Italic'}}>IowanOldStyle-Italic </Text>
        <Text style={{fontFamily: 'IowanOldStyle-Roman'}}>IowanOldStyle-Roman </Text>
        <Text style={{fontFamily: 'Kailasa'}}>Kailasa </Text>
        <Text style={{fontFamily: 'Kailasa-Bold'}}>Kailasa-Bold </Text>
        <Text style={{fontFamily: 'Kannada Sangam MN'}}>Kannada Sangam MN </Text>
        <Text style={{fontFamily: 'KannadaSangamMN'}}>KannadaSangamMN </Text>
        <Text style={{fontFamily: 'KannadaSangamMN-Bold'}}>KannadaSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Khmer Sangam MN'}}>Khmer Sangam MN </Text>
        <Text style={{fontFamily: 'Kohinoor Bangla'}}>Kohinoor Bangla </Text>
        <Text style={{fontFamily: 'Kohinoor Devanagari'}}>Kohinoor Devanagari </Text>
        <Text style={{fontFamily: 'Kohinoor Telugu'}}>Kohinoor Telugu </Text>
        <Text style={{fontFamily: 'KohinoorBangla-Light'}}>KohinoorBangla-Light </Text>
        <Text style={{fontFamily: 'KohinoorBangla-Regular'}}>KohinoorBangla-Regular </Text>
        <Text style={{fontFamily: 'KohinoorBangla-Semibold'}}>KohinoorBangla-Semibold </Text>
        <Text style={{fontFamily: 'KohinoorDevanagari-Light'}}>KohinoorDevanagari-Light </Text>
        <Text style={{fontFamily: 'KohinoorDevanagari-Regular'}}>KohinoorDevanagari-Regular </Text>
        <Text style={{fontFamily: 'KohinoorDevanagari-Semibold'}}>KohinoorDevanagari-Semibold </Text>
        <Text style={{fontFamily: 'KohinoorTelugu-Light'}}>KohinoorTelugu-Light </Text>
        <Text style={{fontFamily: 'KohinoorTelugu-Medium'}}>KohinoorTelugu-Medium </Text>
        <Text style={{fontFamily: 'KohinoorTelugu-Regular'}}>KohinoorTelugu-Regular </Text>
        <Text style={{fontFamily: 'Lao Sangam MN'}}>Lao Sangam MN </Text>
        <Text style={{fontFamily: 'Malayalam Sangam MN'}}>Malayalam Sangam MN </Text>
        <Text style={{fontFamily: 'MalayalamSangamMN'}}>MalayalamSangamMN </Text>
        <Text style={{fontFamily: 'MalayalamSangamMN-Bold'}}>MalayalamSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Marker Felt'}}>Marker Felt </Text>
        <Text style={{fontFamily: 'MarkerFelt-Thin'}}>MarkerFelt-Thin </Text>
        <Text style={{fontFamily: 'MarkerFelt-Wide'}}>MarkerFelt-Wide </Text>
        <Text style={{fontFamily: 'Menlo'}}>Menlo </Text>
        <Text style={{fontFamily: 'Menlo-Bold'}}>Menlo-Bold </Text>
        <Text style={{fontFamily: 'Menlo-BoldItalic'}}>Menlo-BoldItalic </Text>
        <Text style={{fontFamily: 'Menlo-Italic'}}>Menlo-Italic </Text>
        <Text style={{fontFamily: 'Menlo-Regular'}}>Menlo-Regular </Text>
        <Text style={{fontFamily: 'Mishafi'}}>Mishafi </Text>
        <Text style={{fontFamily: 'Noteworthy'}}>Noteworthy </Text>
        <Text style={{fontFamily: 'Noteworthy-Bold'}}>Noteworthy-Bold </Text>
        <Text style={{fontFamily: 'Noteworthy-Light'}}>Noteworthy-Light </Text>
        <Text style={{fontFamily: 'Optima'}}>Optima </Text>
        <Text style={{fontFamily: 'Optima-Bold'}}>Optima-Bold </Text>
        <Text style={{fontFamily: 'Optima-BoldItalic'}}>Optima-BoldItalic </Text>
        <Text style={{fontFamily: 'Optima-ExtraBlack'}}>Optima-ExtraBlack </Text>
        <Text style={{fontFamily: 'Optima-Italic'}}>Optima-Italic </Text>
        <Text style={{fontFamily: 'Optima-Regular'}}>Optima-Regular </Text>
        <Text style={{fontFamily: 'Oriya Sangam MN'}}>Oriya Sangam MN </Text>
        <Text style={{fontFamily: 'OriyaSangamMN'}}>OriyaSangamMN </Text>
        <Text style={{fontFamily: 'OriyaSangamMN-Bold'}}>OriyaSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Palatino'}}>Palatino </Text>
        <Text style={{fontFamily: 'Palatino-Bold'}}>Palatino-Bold </Text>
        <Text style={{fontFamily: 'Palatino-BoldItalic'}}>Palatino-BoldItalic </Text>
        <Text style={{fontFamily: 'Palatino-Italic'}}>Palatino-Italic </Text>
        <Text style={{fontFamily: 'Palatino-Roman'}}>Palatino-Roman </Text>
        <Text style={{fontFamily: 'Papyrus'}}>Papyrus </Text>
        <Text style={{fontFamily: 'Papyrus-Condensed'}}>Papyrus-Condensed </Text>
        <Text style={{fontFamily: 'Party LET'}}>Party LET </Text>
        <Text style={{fontFamily: 'PartyLetPlain'}}>PartyLetPlain </Text>
        <Text style={{fontFamily: 'PingFang HK'}}>PingFang HK </Text>
        <Text style={{fontFamily: 'PingFang SC'}}>PingFang SC </Text>
        <Text style={{fontFamily: 'PingFang TC'}}>PingFang TC </Text>
        <Text style={{fontFamily: 'PingFangHK-Light'}}>PingFangHK-Light </Text>
        <Text style={{fontFamily: 'PingFangHK-Medium'}}>PingFangHK-Medium </Text>
        <Text style={{fontFamily: 'PingFangHK-Regular'}}>PingFangHK-Regular </Text>
        <Text style={{fontFamily: 'PingFangHK-Semibold'}}>PingFangHK-Semibold </Text>
        <Text style={{fontFamily: 'PingFangHK-Thin'}}>PingFangHK-Thin </Text>
        <Text style={{fontFamily: 'PingFangHK-Ultralight'}}>PingFangHK-Ultralight </Text>
        <Text style={{fontFamily: 'PingFangSC-Light'}}>PingFangSC-Light </Text>
        <Text style={{fontFamily: 'PingFangSC-Medium'}}>PingFangSC-Medium </Text>
        <Text style={{fontFamily: 'PingFangSC-Regular'}}>PingFangSC-Regular </Text>
        <Text style={{fontFamily: 'PingFangSC-Semibold'}}>PingFangSC-Semibold </Text>
        <Text style={{fontFamily: 'PingFangSC-Thin'}}>PingFangSC-Thin </Text>
        <Text style={{fontFamily: 'PingFangSC-Ultralight'}}>PingFangSC-Ultralight </Text>
        <Text style={{fontFamily: 'PingFangTC-Light'}}>PingFangTC-Light </Text>
        <Text style={{fontFamily: 'PingFangTC-Medium'}}>PingFangTC-Medium </Text>
        <Text style={{fontFamily: 'PingFangTC-Regular'}}>PingFangTC-Regular </Text>
        <Text style={{fontFamily: 'PingFangTC-Semibold'}}>PingFangTC-Semibold </Text>
        <Text style={{fontFamily: 'PingFangTC-Thin'}}>PingFangTC-Thin </Text>
        <Text style={{fontFamily: 'PingFangTC-Ultralight'}}>PingFangTC-Ultralight </Text>
        <Text style={{fontFamily: 'Savoye LET'}}>Savoye LET </Text>
        <Text style={{fontFamily: 'SavoyeLetPlain'}}>SavoyeLetPlain </Text>
        <Text style={{fontFamily: 'Sinhala Sangam MN'}}>Sinhala Sangam MN </Text>
        <Text style={{fontFamily: 'SinhalaSangamMN'}}>SinhalaSangamMN </Text>
        <Text style={{fontFamily: 'SinhalaSangamMN-Bold'}}>SinhalaSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Snell Roundhand'}}>Snell Roundhand </Text>
        <Text style={{fontFamily: 'SnellRoundhand-Black'}}>SnellRoundhand-Black </Text>
        <Text style={{fontFamily: 'SnellRoundhand-Bold'}}>SnellRoundhand-Bold </Text>
        <Text style={{fontFamily: 'Symbol'}}>Symbol </Text>
        <Text style={{fontFamily: 'Tamil Sangam MN'}}>Tamil Sangam MN </Text>
        <Text style={{fontFamily: 'TamilSangamMN-Bold'}}>TamilSangamMN-Bold </Text>
        <Text style={{fontFamily: 'Telugu Sangam MN'}}>Telugu Sangam MN </Text>
        <Text style={{fontFamily: 'Thonburi'}}>Thonburi </Text>
        <Text style={{fontFamily: 'Thonburi-Bold'}}>Thonburi-Bold </Text>
        <Text style={{fontFamily: 'Thonburi-Light'}}>Thonburi-Light </Text>
        <Text style={{fontFamily: 'Times New Roman'}}>Times New Roman </Text>
        <Text style={{fontFamily: 'TimesNewRomanPS-BoldItalicMT'}}>TimesNewRomanPS-BoldItalicMT </Text>
        <Text style={{fontFamily: 'TimesNewRomanPS-BoldMT'}}>TimesNewRomanPS-BoldMT </Text>
        <Text style={{fontFamily: 'TimesNewRomanPS-ItalicMT'}}>TimesNewRomanPS-ItalicMT </Text>
        <Text style={{fontFamily: 'TimesNewRomanPSMT'}}>TimesNewRomanPSMT </Text>
        <Text style={{fontFamily: 'Trebuchet MS'}}>Trebuchet MS </Text>
        <Text style={{fontFamily: 'Trebuchet-BoldItalic'}}>Trebuchet-BoldItalic </Text>
        <Text style={{fontFamily: 'TrebuchetMS-Bold'}}>TrebuchetMS-Bold </Text>
        <Text style={{fontFamily: 'TrebuchetMS-Italic'}}>TrebuchetMS-Italic </Text>
        <Text style={{fontFamily: 'Verdana'}}>Verdana </Text>
        <Text style={{fontFamily: 'Verdana-Bold'}}>Verdana-Bold </Text>
        <Text style={{fontFamily: 'Verdana-BoldItalic'}}>Verdana-BoldItalic </Text>
        <Text style={{fontFamily: 'Verdana-Italic'}}>Verdana-Italic </Text>
        <Text style={{fontFamily: 'Zapf Dingbats'}}>Zapf Dingbats </Text>
        <Text style={{fontFamily: 'ZapfDingbatsITC'}}>ZapfDingbatsITC </Text>
        <Text style={{fontFamily: 'Zapfino'}}>Zapfino </Text>
    </ScrollView>
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