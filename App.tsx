import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { useCallback } from 'react';
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

SplashScreen.preventAutoHideAsync();

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const linking = {
    prefixes: ['*'],
    config: {
      screens: {
        MealsCategory: '/category',
        MealsOverview: '/category/:id',
      },
    },
  };

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer linking={linking}>
        <Stack.Navigator initialRouteName='MealsCategories'>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen} />
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
  },
  listItem: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
