import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position:'absolute',
    backgroundColor: '#CED0CE',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    zIndex:1500,
    width:'100%'
    
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'black',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft:10
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    alignContent: 'space-between',
    alignItems: 'flex-start'
  },
  
});

export default styles; 