import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../utils/navUtils';
import CategoriesScreen from '../screens/CategoriesScreen';
import FeatureScreen from '../screens/FeatureScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator<RootStackParamList>();
const headerOptions = {
  headerStyle: {
    backgroundColor: '#351401',
  },
  headerTintColor: 'white',
  drawerActiveTintColor: '#351401',
  drawerActiveBackgroundColor: '#e4baa1',
  drawerInactiveTintColor: 'white',
};
const MainFeatures: React.FC = () => {
  return (
    <>
      <Drawer.Navigator screenOptions={headerOptions}>
        <Drawer.Screen
          name='MealsCategories'
          component={CategoriesScreen}
          options={{
            title: 'All Categories',
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name='grid' />
            ),
          }}
        />
        <Drawer.Screen
          name='Feature'
          component={FeatureScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons color={color} size={size} name='star' />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default MainFeatures;
