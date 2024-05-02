import { Platform, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import React from 'react';

const CardWrapper: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default CardWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation: 4,
    shadowColor: 'black',
    overflow: Platform.select({ android: 'hidden', ios: 'visible' }),
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
