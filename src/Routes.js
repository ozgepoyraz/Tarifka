import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details'

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={styleScreen}
        />
        <Stack.Screen name="Meals" component={Meals} options={styleScreen} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={styleScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styleScreen = {headerTitleAlign: 'center', headerTintColor: '#ffa500'};

export default Routes;
