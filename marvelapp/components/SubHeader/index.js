import React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { View, Text } from 'react-native';
import styles from './styles';
import SearchBox from '../Search'

const SubHeader = ({ navigation, title, subtitle, handleSearch, charactersSearch, searchValue, handleClear, renderSearchBar }) => {

  const dataInfo = () => (
    <View style={styles.subHeader}>
      <HeaderBackButton style={{ flex: 0.2 }} tintColor={'#ccc'} onPress={() => { navigation.goBack() }} />
      <View style={{ flex: 0.8 }}>
        <Text style={styles.subHeaderTitle}> {title} </Text>
        <Text style={styles.subHeaderSubtitle}> {subtitle} </Text>
      </View>
    </View>
  )
  const search = () => (
    <View style={styles.subHeader}>
      <SearchBox
        navigation={navigation}
        onHandleSearch={handleSearch}
        charactersSearch={charactersSearch}
        searchValue={searchValue}
        onHandleClear={handleClear}
      />
    </View>
  )
  
  return renderSearchBar ? search() : dataInfo();

}

SubHeader.defaultProps={
  renderSearchBar:false
}

export default SubHeader;
