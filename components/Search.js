import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [result, setResult] = useState("");
  return (
    <View style={styles.inputParent}>
      <TextInput style={styles.inputText} placeholder='Search...' value={result} onChangeText={text => setResult(text)} />
      {result.length === 0 ? '' :
        <TouchableOpacity onPress={() => setResult('')}>
          <Icon name='close-outline' style={styles.button} />
        </TouchableOpacity>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputParent: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    width: '96%',
    borderRadius: 10,
  },
  inputText: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  button: {
    fontSize: 30,
    color: '#000000',
    paddingRight: 8,
    paddingTop: 4
  },
});


export default Search