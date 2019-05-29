import React from 'react';
import { HeaderBackButton } from 'react-navigation';
import { View, Text } from 'react-native';
import styles from './styles';

const SubHeader = ({ navigation, title, subtitle }) => {
    return (
        <View style={styles.subHeader}>
            <HeaderBackButton style={{ flex: 0.2 }} tintColor={'#ccc'} onPress={() => { navigation.goBack() }} />
            <View style={{ flex: 0.8 }}>
                <Text style={styles.subHeaderTitle}> {title} </Text>
                <Text style={styles.subHeaderSubtitle}> {subtitle} </Text>
            </View>
        </View>
    )
}

export default SubHeader;
