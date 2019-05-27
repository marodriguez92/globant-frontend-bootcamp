import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import CharacterItem from '../CharacterItem'

const renderItem = ({ item }) => (
  <CharacterItem
    name={item.name}
    description={item.description}
    img={item.thumbnail.path}
    extension={item.thumbnail.extension} />
)

const renderFooter = () => (
  <View style={styles.footer}>
    <ActivityIndicator animating size="large" />
  </View>
)

const renderSeparator = () => (
  <View style={styles.separator} />
)

export const CharacterList = (props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => props.navigation.navigate('CharacterComics')}>
      <FlatList
        data={props.characters}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
    </TouchableOpacity>
  </View>
)





export default CharacterList