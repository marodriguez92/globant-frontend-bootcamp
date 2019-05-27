import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

const ComicItem = ({ navigation, comicUrl }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.dispatch({ type: 'ComicDetails' })}
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