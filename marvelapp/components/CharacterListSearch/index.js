import React from 'react'
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native'
import styles from './styles';
import PropTypes from 'prop-types';

const renderItem = ({ item }, navigation) => (
  <TouchableOpacity onPress={() => {
    navigation.dispatch({ type: 'CharacterComics', payload: { id: item.id } })
  }}
  >
    <View style={styles.item}>
      <Image source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} style={styles.img} />
      <Text style={styles.title}>{item.name}</Text>
    </View>
  </TouchableOpacity>
)

const renderSeparator = () => (
  <View style={styles.separator} />
)

const activateSearchResults =(height,showRender) =>{
  if(showRender) {
    return{
      top:height, 
      height:'30%'
    }
  }
}

const CharacterListSearch = (props) => (
  <View style={[styles.container, activateSearchResults(props.height, !!props.charactersSearch.length)]}>
    <FlatList
      data={props.charactersSearch}
      renderItem={(item) => (
        renderItem(item, props.navigation)
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={renderSeparator}

    />
  </View>
);

CharacterListSearch.propTypes = {
  charactersSearch: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired
}

export default CharacterListSearch