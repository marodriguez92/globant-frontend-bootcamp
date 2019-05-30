import React from 'react';
import {
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import styles from './styles';
import CharacterItem from '../CharacterItem'

const renderItem = ({ item }, handleNavigate) => (
  <CharacterItem
    name={item.name}
    id={item.id}
    description={item.description}
    img={item.thumbnail.path}
    extension={item.thumbnail.extension} 
    handleNavigate={handleNavigate}
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


const CharacterList = (props) => {
  if (props.isFetching) {
    return (
        <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator animating={true} size="large"/>
        </View>
    );
  }
  return(
    <View style={styles.container}>
      <FlatList
        data={props.characters}
        renderItem={(item) => (
          renderItem(item, props.handleNavigate)
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={renderSeparator}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={0.5}
       ListFooterComponent={renderFooter(props.isFetchingMore)}
        
      />
    </View>
  )
}


export default CharacterList