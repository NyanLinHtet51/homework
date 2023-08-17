import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Category from './components/Category';
import Post from './components/Post';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar barStyle='dark-content' hidden={false} backgroundColor='#ffffff' translucent={false} />

        <Search />

        <Category />

        <Post />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
