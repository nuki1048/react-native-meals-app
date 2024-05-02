import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../utils/navUtils';
import MainFeatures from './DrawerLayout';
import MealsOverviewScreen from '../screens/MealsOverviewScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
const Stack = createNativeStackNavigator<RootStackParamList>();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#351401',
  },
  headerTintColor: 'white',
  contentStyle: {
    backgroundColor: '#3f2f25',
  },
};
const MainLayout = () => {
  return (
    <Stack.Navigator
      initialRouteName='MealsCategories'
      screenOptions={headerOptions}
    >
      <Stack.Screen
        name='Drawer'
        component={MainFeatures}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
      <Stack.Screen name='MealDetails' component={MealDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainLayout;
