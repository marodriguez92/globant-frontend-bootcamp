import React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { View, Text } from 'react-native';
import styles from './styles';
import SearchBox from '../Search'

const SubHeader = ({ navigation, title, subtitle, handleSearch, charactersSearch, searchValue, handleClear, renderSearchBar }) => {

  const dataInfo = () => (
    <View>
      <HeaderBackButton style={{ flex: 0.2 }} tintColor={'#ccc'} onPress={() => { navigation.goBack() }} />
      <View style={{ flex: 0.8 }}>
        <Text style={styles.subHeaderTitle}> {title} </Text>
        <Text style={styles.subHeaderSubtitle}> {subtitle} </Text>
      </View>
    </View>
  )
  const search = () => (
    <SearchBox
      navigation={navigation}
      onHandleSearch={handleSearch}
      charactersSearch={charactersSearch}
      searchValue={searchValue}
      onHandleClear={handleClear}
    />
  )
  return (
    <View style={styles.subHeader}>
      {renderSearchBar ? search():dataInfo()}
    </View>
  )
}

SubHeader.defaultProps={
  renderSearchBar:false
}

export default SubHeader;
