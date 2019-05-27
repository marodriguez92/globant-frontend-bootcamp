import React from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import ComicItem from '../ComicItem/ComicItem';
import styles from './styles';

const CharacterComicsList = ({ navigation, isFetching, characterComics }) => {
    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} />
            </View>
        );
    } else {
        return (
            <View style={styles.listContainer}>
                <FlatList
                    data={characterComics}
                    renderItem={({ item }) => (
                        <ComicItem 
                            navigation={navigation}
                            comicUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
            </View>
        );
    }
}

export default CharacterComicsList;
