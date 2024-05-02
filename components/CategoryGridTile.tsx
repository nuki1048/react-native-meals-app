import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Category from '../models/category';
import { useLinkProps, useLinkTo } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import CardWrapper from './CardWrapper';

const CategoryGridTile: React.FC<Category & { onPress?: () => void }> = ({
  color,
  title,
  onPress,
}) => {
  return (
    <CardWrapper style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </CardWrapper>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  button: { flex: 1 },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
  },
});
