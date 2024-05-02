import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const SubTitle: React.FC<Props> = ({ title, children }) => {
  return (
    <View style={styles.subTitleWrapper}>
      <Text style={styles.subTitle}>{title || children}</Text>
    </View>
  );
};

export default SubTitle;

const styles = StyleSheet.create({
  subTitleWrapper: {
    padding: 6,
    borderBottomColor: '#e2b497',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitle: {
    fontFamily: 'Inter_700Bold',
    color: '#e2b497',
    fontSize: 18,
    textAlign: 'center',
  },
});
