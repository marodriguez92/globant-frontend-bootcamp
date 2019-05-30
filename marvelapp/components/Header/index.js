import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import SubHeader from '../SubHeader'

const Header = (props) => {
  return (
    <View 
    onLayout={props.onLayout}
    style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}> MARVEL </Text>
      </View>
      <SubHeader
        navigation={props.navigation}
        title={props.title}
        subtitle={props.subtitle}
        handleSearch={props.handleSearch}
        handleClear={props.handleClear}
        renderSearchBar={props.renderSearchBar}
        charactersSearch={props.charactersSearch}
        searchValue={props.searchValue}
        searchResults={props.searchResults}
      />
      
    </View>
  )
}

export default Header;
