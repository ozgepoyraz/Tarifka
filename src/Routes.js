import React from 'react';
import {FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{headerTitleAlign: 'center', headerTintColor: '#ffa500'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
