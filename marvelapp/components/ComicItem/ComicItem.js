import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ComicItem = ({ handleNavigate, comicUrl, id }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => handleNavigate(id)}
            >
                <Image
                    style={styles.comicItem}
                    source={{ uri: comicUrl }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
        </View>
    )
} 

ComicItem.propTypes = {
    handleNavigate: PropTypes.func.isRequired,
    comicUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default ComicItem;