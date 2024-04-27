import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

import { MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { RouteProp, useRoute } from '@react-navigation/native';
type Props = NativeStackScreenProps<RootStackParamList, 'MealsOverview'>;

const MealsOverviewScreen: React.FC<Props> = ({ navigation }) => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'MealsOverview'>>();

  const mealsByCategory = MEALS.filter((item) =>
    item.categoryIds.includes(params.categoryId)
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={mealsByCategory}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
      <Text>{params.categoryId}</Text>
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
