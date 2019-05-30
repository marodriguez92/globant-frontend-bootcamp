import React, { Component } from 'react'
import {
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'
import CharacterListSearch from '../CharacterListSearch';


const searchBox = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Characters"
          value={props.searchValue}
          onChangeText={props.onHandleSearch}
        />
        <TouchableOpacity style={styles.clearButton} onPress={props.onHandleClear} >
          <Text style={styles.textButton}>X</Text>
        </TouchableOpacity>
      </View>
      <CharacterListSearch
        navigation={props.navigation}
        charactersSearch={props.charactersSearch} />

    </View>
  );
}


export default searchBox