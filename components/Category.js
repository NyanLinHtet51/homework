import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const Category = () => {
  const categories = ["Health and fitness", "Photography", "Travel", "Food", "Fashion and Beauty", "DIY craft"]
  return (
    <View>
      <Text style={styles.commonTitle}>Categories</Text>
      <ScrollView horizontal={true} style={styles.scrollParent}>
        {categories.map(item => {
          return (
            <View style={styles.categoryCard} key={item}>
              <Text>{item}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  commonTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40,
    marginLeft: 8
  },
  scrollParent: {
    paddingTop: 8,
    paddingBottom: 8
  },
  categoryCard: {
    width: 100,
    height: 50,
    backgroundColor: '#8a918c',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

});

export default Category