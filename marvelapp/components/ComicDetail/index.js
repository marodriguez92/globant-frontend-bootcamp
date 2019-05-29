import React from 'react';
import { View, Text } from 'react-native';
import styles from './style'

const renderDetail = (title, content) => {
    const newContent = Array.isArray(content) ? content.map( writer => writer.name ).join(', ') : content;
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.textTitle}>
                {title}
            </Text>
            <Text style={styles.textContent}>
                {newContent}
            </Text>
        </View>
    )
}

const ComicDetail = (props) => {
    const summaryFiltered = props.comic.description.replace(/<(.|\n)*?>/g, ''); 
    const dataWriters = props.comic.creators.items.filter( creator => creator.role === 'writer' );
    const dataArtist = props.comic.creators.items.filter( creator => creator.role !== 'writer' );
    return (
        <View style={styles.container}>
            {renderDetail( 'Published On: ', props.comic.dates[0].date )}
            {renderDetail( 'Writers : ', dataWriters )}
            {renderDetail( 'Artist: ', dataArtist )}
            {renderDetail( 'Summary: ', summaryFiltered )}
        </View>
    )
}

export default ComicDetail;



    