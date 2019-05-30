import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

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

export default ComicItem;