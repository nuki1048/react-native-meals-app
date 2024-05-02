import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
  ViewProps,
} from 'react-native';
import Meal from '../models/meal';
import CardWrapper from './CardWrapper';
import { PropsWithoutRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../utils/navUtils';
import MealDetails from './MealDetails';

interface Props extends Meal {
  onPress: () => void;
}

const MealItem: React.FC<Props> = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  const navigation = useNavigation();

  return (
    <CardWrapper style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          pressed && Platform.OS !== 'android' ? styles.buttonPressed : null,
        ]}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            affordability={affordability}
            duration={duration}
            complexity={complexity}
          />
        </View>
      </Pressable>
    </CardWrapper>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
