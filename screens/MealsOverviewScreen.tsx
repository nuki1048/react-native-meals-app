import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/navUtils';
import Meal from '../models/meal';
import MealItem from '../components/MealItem';
import { useSetHeader } from '../hooks/useSetHeader';
type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen: React.FC<Props> = ({ route, navigation }) => {
  const { params } = route;
  const mealsByCategory = MEALS.filter((item) =>
    item.categoryIds.includes(params.categoryId)
  );
  const title = CATEGORIES.find((item) => item.id === params.categoryId)?.title;
  const setTitle = useSetHeader({
    initialTitle: title,
    initialBackTitle: 'Back',
  });

  // useLayouutEffect its a react hook that execute before render of component, but it can be used as standard react useEffect

  const renderItem = (itemData: ListRenderItemInfo<Meal>) => {
    return (
      <MealItem
        {...itemData.item}
        onPress={() =>
          navigation.navigate('MealDetails', {
            mealId: itemData.item.id,
          })
        }
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsByCategory}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
