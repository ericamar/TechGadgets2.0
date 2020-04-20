import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Button, Linking, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Gadget' component={GadgetScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Home Screen
function Home({navigation})
{

  //Gadget variables
  const [gadgets, setGadget] = useState([
     {name: 'Prophet 6', key: '1'},
     {name: 'TR-808', key: '2'},
     {name: 'ARP2600', key: '3'},
     {name: 'Eurorack', key: '4'},
     {name: 'Prophet 12', key: '5'},
  ]);


  return(
    <View style={styles.container}>
 
    <FlatList
      data={gadgets}
      renderItem={({item}) => 
      (
        <TouchableOpacity onPress = {() => navigation.navigate('Gadget', {item})}>
          <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />

  </View>
  );

}

//Gadget Screen
function GadgetScreen({route, navigation})
{
  //GET the passed information
  const {item} = route.params;



  //OPEN LINK PRESSHANDLER
  const pressHandler = () =>
  {
    if(item.key == 1)
    {
      Linking.openURL(prophetURL);
    }
    else if(item.key == 2)
    {
      Linking.openURL(tr808URL);
    }
    else if(item.key == 3)
    {
      Linking.openURL(arp26002URL);
    }
    else if(item.key == 4)
    {
      Linking.openURL(eurorackURL);
    }
    else if(item.key == 5)
    {
      Linking.openURL(prophet12URL);
    }
    
  }

  //URLs
  const prophetURL = "https://www.sequential.com/product/prophet-6/";

  const prophet12URL = "https://www.sequential.com/product/prophet-12-keyboard/";

  const eurorackURL = "https://www.sweetwater.com/shop/keyboards-synthesizers/eurorack-modular-synthesizers/";

  const arp26002URL = "https://www.sweetwater.com/store/detail/ARP2600--arp-2600-semi-modular-analog-synthesizer-system";

  const tr808URL = "https://en.wikipedia.org/wiki/Roland_TR-808";
  


  return(
  <View style={styles.container}>
    <Text style ={styles.item}>{ item.name }</Text>
    <Image
      style={{width: 250, height: 250}}
      resizeMode="contain"
      source={require('./assets/prophet6.jpg')}
    />
    <Button title = 'More details' onPress={pressHandler}/>

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

  item: 
  {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'lightblue',
    fontSize: 24,
    marginHorizontal: 10,
  }
});
