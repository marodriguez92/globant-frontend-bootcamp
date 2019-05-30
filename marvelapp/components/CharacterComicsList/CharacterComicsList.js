import React from 'react';
import {
    View,
    FlatList,
    ActivityIndicator
} from 'react-native';
import ComicItem from '../ComicItem/ComicItem';
import styles from './styles';
import PropTypes from 'prop-types';

const CharacterComicsList = ({ handleNavigate, isFetching, characterComics }) => {
    if (isFetching) {
        return (
            <View style={styles.activityIndicatorContainer}>
                <ActivityIndicator animating={true} size="large"/>
            </View>
        );
    } else {
        return (
            <View style={styles.listContainer}>
                <FlatList
                    data={characterComics}
                    renderItem={({ item }) => (
                        <ComicItem
                            handleNavigate={handleNavigate}
                            comicUrl={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                            id={item.id}
                        />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                />
            </View>
        );
    }
}

CharacterComicsList.propTypes = {
    handleNavigate: PropTypes.func.isRequired, 
    isFetching: PropTypes.bool.isRequired, 
    characterComics: PropTypes.array.isRequired
}

export default CharacterComicsList;
