import { StyleSheet } from 'react-native';
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import MainLayout from './components/NavigationLayout';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

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

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer onReady={onLayoutRootView}>
        <MainLayout />
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
