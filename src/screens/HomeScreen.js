import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import SwipeableCard from '../components/SwipeableCard';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/hayah-logo.png')}
        style={styles.logo}
      />
      <SwipeableCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default HomeScreen;