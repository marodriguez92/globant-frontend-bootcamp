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
        color: 'white',
        fontSize: 85,
        letterSpacing: -5,
        fontWeight: '900',
        includeFontPadding: false,
        transform: [{ scaleY: 1.4 }]
    }
  });
  
export default styles;