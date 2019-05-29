import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Font } from 'expo';

class Header extends Component {
    state = {
        fontLoaded: false,
    };

    async componentDidMount() {
        await Font.loadAsync({
            'marvel-bold': require('../../assets/fonts/marvel/Marvel-Bold.ttf'),
        });
        this.setState({
            fontLoaded: true
        })
    }

    render() {
        return (
            <View style={styles.header}>
                {this.state.fontLoaded ? 
                    (<Text style={styles.headerTitle}> MARVEL </Text>) 
                : null}
            </View>
        )
    }
}

export default Header;
