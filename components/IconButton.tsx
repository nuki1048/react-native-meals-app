import {
  Animated,
  OpaqueColorValue,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useRef } from 'react';

interface Props extends PressableProps {
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
}

const IconButton: React.FC<Props> = ({ icon, color = 'white', ...props }) => {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => pressed && styles.buttonPressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonPressed: { opacity: 0.5 },
});
