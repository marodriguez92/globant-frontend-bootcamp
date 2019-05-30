import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#e91c1c', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: 15,
        paddingTop:30
    },
    headerTitle: {
        color: 'white',
        fontSize: 85,
        letterSpacing: -5,
        fontWeight: '900',
        includeFontPadding: false,
        transform: [{ scaleY: 1.4 }]
    },
    container:{
    }
  });
  
export default styles;