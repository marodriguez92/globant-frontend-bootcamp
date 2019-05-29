import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        height: '20%',
        backgroundColor: '#e91c1c', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    headerTitle: {
        fontFamily: 'marvel-bold',
        color: 'white',
        fontSize: 110,
        letterSpacing: -10,
        includeFontPadding: false,
    }
  });
  
export default styles;