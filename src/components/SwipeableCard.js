import React from 'react';
import { View, Text, StyleSheet, Image, Animated, PanResponder } from 'react-native';

const SwipeableCard = () => {
  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (event, gesture) => {
      if (gesture.dx > 120) {
        Animated.spring(position, {
          toValue: { x: 500, y: gesture.dy },
          useNativeDriver: false,
        }).start(() => {
          // Handle like action
        });
      } else if (gesture.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -500, y: gesture.dy },
          useNativeDriver: false,
        }).start(() => {
          // Handle dislike action
        });
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 4,
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const rotateAndTranslate = {
    transform: [
      {
        rotate: position.x.interpolate({
          inputRange: [-200, 0, 200],
          outputRange: ['-30deg', '0deg', '30deg'],
        }),
      },
      ...position.getTranslateTransform(),
    ],
  };

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[styles.card, rotateAndTranslate]}
    >
      <Image
        source={{ uri: 'https://example.com/modest-fashion-image.jpg' }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Elegant Abaya</Text>
        <Text style={styles.price}>$79.99</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#00A86B',
  },
});

export default SwipeableCard;