import React from 'react';
import {
  View,
   FlatList,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import CharacterItem from '../CharacterItem'

const renderItem = ({item}, navigation ) => (
  <CharacterItem
    name={item.name}
    description={item.description}
    img={item.thumbnail.path}
    extension={item.thumbnail.extension} 
    onPress={()=>{      
      navigation.dispatch({type: 'CharacterComics', payload: {id: item.id} })
    }}
  />
)

const renderFooter = () => (
  <View style={styles.footer}>
    <ActivityIndicator animating size="large" />
  </View>
)

const renderSeparator = () => (
  <View style={styles.separator} />
)

const CharacterList = (props) => (
  <View style={styles.container}>
      <FlatList
        data={props.characters}
        renderItem={(item)=>(
          renderItem(item, props.navigation)
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
  </View>
)

export default CharacterList