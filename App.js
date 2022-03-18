import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet,Text,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Cart from './Screens/Cart';
import Brands from './Screens/Brands';
import Products from './Screens/Products';
import SplashScreen from './Screens/SplashScreen';
import Error from './Screens/Error';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' >
          <Stack.Screen name='Splash' component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen}
           options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate(Cart)} > 

                <Text>CART</Text>
            
              </TouchableOpacity>
            ),
              headerBackVisible:false,
              headerStyle: {
                backgroundColor: '#eee',
              },
              headerTintColor: '#aaa',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#000'
              },

          })}
          />
          <Stack.Screen name='Cart' component={Cart} />
          <Stack.Screen name="Brands" component={Brands}
            options={{
              headerStyle: {
                backgroundColor: '#cdcdcd',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#000'
              },
            }}
          />
          <Stack.Screen name="Products" component={Products}
            options={{
              headerStyle: {
                backgroundColor: '#cdcdcd',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
                color: '#000'
              },
            }}
          />
          <Stack.Screen name='Error' component={Error} 
         
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
