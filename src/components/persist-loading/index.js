import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function PersistLoading() {
  return (
    <View style={styles.persistLoading}>
      <Text style={styles.persistLoadingText}>
        Loading
      </Text>
    </View>
  );
}
