import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface Props {
  data: string[];
}

const List: React.FC<Props> = ({ data }) => {
  return data.map((item: string) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 12,
    backgroundColor: '#e2b497',
  },
  text: {
    fontFamily: 'Inter_400Regular',
    color: '#351401',
    textAlign: 'center',
    fontSize: 16,
  },
});
