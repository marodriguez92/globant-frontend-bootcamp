import { StyleSheet } from 'react-native';

const textTitleDefault = {
    color: '#ccc',
    textAlign: 'center'
}

const styles = StyleSheet.create({
    subHeader: {
        backgroundColor: '#2a2a2a',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    subHeaderTitle: {
        ...textTitleDefault,
        fontWeight: 'bold',
        fontSize: 25
    },
    subHeaderSubtitle: {
        ...textTitleDefault,
        fontSize: 15
    }
});

export default styles;
