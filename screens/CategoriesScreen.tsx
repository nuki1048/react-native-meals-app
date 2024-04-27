import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'MealsCategories'>;
const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = (itemData: ListRenderItemInfo<Category>) => {
    const handlePress = () => {
      navigation.navigate('MealsOverview', { categoryId: itemData.item.id });
    };

    return <CategoryGridTile {...itemData.item} onPress={handlePress} />;
  };

  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
