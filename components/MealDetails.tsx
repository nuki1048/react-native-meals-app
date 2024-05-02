import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import Meal from '../models/meal';

interface Props
  extends Pick<Meal, 'duration' | 'complexity' | 'affordability'> {
  containerStyles?: StyleProp<ViewStyle>;
  itemStyles?: StyleProp<TextStyle>;
}

const MealDetails: React.FC<Props> = ({
  duration,
  complexity,
  affordability,
  containerStyles,
  itemStyles,
}) => {
  return (
    <View style={[styles.details, containerStyles]}>
      <Text style={[styles.detailsItem, itemStyles]}>{duration}</Text>
      <Text style={[styles.detailsItem, itemStyles]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, itemStyles]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsItem: {
    fontFamily: 'Inter_400Regular',
    marginHorizontal: 4,
    fontSize: 12,
  },
});
