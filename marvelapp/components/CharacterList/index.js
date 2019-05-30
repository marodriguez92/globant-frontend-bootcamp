import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import CharacterItem from '../CharacterItem'

const renderItem = ({ item }, navigation) => (
  <CharacterItem
    name={item.name}
    description={item.description}
    img={item.thumbnail.path}
    extension={item.thumbnail.extension} 
    onPress={()=>{      
      navigation.dispatch(
        {
          type: 'CharacterComics', 
          payload: {
            characterId: item.id, 
            characterName: item.name
          } 
        }
      )
    }}
  />
)

const renderFooter = (isFetchingMore) => {
  if (isFetchingMore) {
    return (
      <View>
        <ActivityIndicator animating={true} size="large" />
      </View>
    )
  }
}

const renderSeparator = () => (
  <View style={styles.separator} />
)

const CharacterList = (props) => (
  <View style={styles.container}>
    <FlatList
      data={props.characters}
      renderItem={(item) => (
        renderItem(item, props.navigation)
      )}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={renderSeparator}
      onEndReached={props.onEndReached}
      onEndReachedThreshold={0.5}
      ItemFooterComponent={()=>{renderFooter(props.isFetchingMore)}}
      
    />
  </View>
)

export default CharacterList