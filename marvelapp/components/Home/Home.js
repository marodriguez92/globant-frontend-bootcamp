import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CharacterComics')}>
                    <Text> Go to Character Comics Screen </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
