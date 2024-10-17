import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const DiscoverScreen = () => {
  const trendingItems = [
    { id: '1', name: 'Floral Hijab', image: 'https://example.com/floral-hijab.jpg' },
    { id: '2', name: 'Modest Swimwear', image: 'https://example.com/modest-swimwear.jpg' },
    { id: '3', name: 'Casual Abaya', image: 'https://example.com/casual-abaya.jpg' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Styles</Text>
      <FlatList
        data={trendingItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginRight: 20,
  },
  itemImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  itemName: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DiscoverScreen;