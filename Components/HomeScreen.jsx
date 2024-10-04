import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SearchBar, Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sport Shoes</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={24} color="white" style={styles.icon} />
          <Ionicons name="cart-outline" size={24} color="white" style={styles.icon} />
          <Ionicons name="notifications-outline" size={24} color="white" style={styles.icon} />
        </View>
      </View>
      
      <SearchBar
        placeholder="Search items"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.searchInputContainer}
        inputStyle={styles.searchInput}
      />
      
      <View style={styles.walletContainer}>
        <View>
          <Text style={styles.walletLabel}>Wallet balance</Text>
          <Text style={styles.balance}>Rp1.000.000</Text>
        </View>
        <TouchableOpacity style={styles.topUpButton}>
          <Text style={styles.topUpText}>Top up</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerContainer}>
        <Image source={require('../assets/banner_15_off.png')} style={styles.bannerImage} />
        <Image source={require('../assets/banner_flash_sale.png')} style={styles.bannerImage} />
      </ScrollView>
      
      <View style={styles.categoriesContainer}>
        <Text style={styles.sectionTitle}>SHOP BY CATEGORY</Text>
        <View style={styles.categories}>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/icon_footwear.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>FOOTWEAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/icon_bags.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>BAGS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={require('../assets/icon_apparel.png')} style={styles.categoryIcon} />
            <Text style={styles.categoryText}>APPAREL</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={styles.productsContainer}>
        <Text style={styles.sectionTitle}>FOR YOU</Text>
        <View style={styles.productGrid}>
          <View style={styles.productItem}>
            <Image source={require('../assets/product_legging.png')} style={styles.productImage} />
            <Text style={styles.productName}>AIR LEGGING SPORT</Text>
            <Text style={styles.productCategory}>Apparel</Text>
            <Text style={styles.productPrice}>Rp200.000</Text>
          </View>
          <View style={styles.productItem}>
            <Image source={require('../assets/product_shoes.png')} style={styles.productImage} />
            <Text style={styles.productName}>AERO SPORT INFINITY MAX</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp450.000</Text>
          </View>
          <View style={styles.productItem}>
            <Image source={require('../assets/product_runner.png')} style={styles.productImage} />
            <Text style={styles.productName}>SPORT+ RUNNER BLUE EDITION</Text>
            <Text style={styles.productCategory}>Footwear</Text>
            <Text style={styles.productPrice}>Rp250.000</Text>
          </View>
          <View style={styles.productItem}>
            <Image source={require('../assets/product_bag.png')} style={styles.productImage} />
            <Text style={styles.productName}>SPORT+ BAG</Text>
            <Text style={styles.productCategory}>Bag</Text>
            <Text style={styles.productPrice}>Rp350.000</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ff7043',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 15,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    padding: 10,
  },
  searchInputContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  searchInput: {
    color: '#000',
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  walletLabel: {
    color: '#888',
  },
  balance: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  topUpButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff7043',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  topUpText: {
    color: '#ff7043',
  },
  bannerContainer: {
    padding: 15,
  },
  bannerImage: {
    width: 300,
    height: 150,
    marginRight: 15,
    borderRadius: 10,
  },
  categoriesContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryItem: {
    alignItems: 'center',
    width: '30%',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 12,
  },
  productsContainer: {
    padding: 15,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productItem: {
    width: '48%',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productCategory: {
    color: '#888',
    fontSize: 12,
    marginBottom: 5,
  },
  productPrice: {
    fontWeight: 'bold',
    color: '#ff7043',
  },
});