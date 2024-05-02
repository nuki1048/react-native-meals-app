import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../utils/navUtils';
import { MEALS } from '../data/dummy-data';
import { useSetHeader } from '../hooks/useSetHeader';
import MealDetails from '../components/MealDetails';
import SubTitle from '../components/MealDetail/SubTitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

type Props = NativeStackScreenProps<RootStackParamList, 'MealDetails'>;

const MealDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((item) => item.id === mealId);
  const headerTitle = useSetHeader({
    initialTitle: mealData?.title,
    initialBackTitle: 'Back',
  });

  const handlePress = () => {
    if (!mealData) return;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon='star' onPress={handlePress} color='white' />;
      },
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: mealData?.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{mealData?.title}</Text>

        <MealDetails
          duration={mealData?.duration}
          affordability={mealData?.affordability}
          complexity={mealData?.complexity}
          itemStyles={styles.detailText}
        />

        <View style={styles.listContainer}>
          <SubTitle>Ingredients</SubTitle>
          <List data={mealData?.ingredients} />
          <SubTitle>Steps</SubTitle>
          <List data={mealData?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  listContainer: {
    width: '80%',
  },
  detailText: { color: 'white', fontFamily: 'Inter_400Regular' },
});
