import React, { Component } from 'react'
import {
  View,
  FlatList,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native'
import styles from './styles'

const searchBox = (props) => {
  console.log();
  const renderNoResult = () => <Text style={styles.noResults} >{'No results found'}</Text>
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
          <Text style={styles.textButton}>{'X'}</Text>
        </TouchableOpacity>
      </View>
      {!props.searchResults && renderNoResult()}
    </View>
  );
}


export default searchBox