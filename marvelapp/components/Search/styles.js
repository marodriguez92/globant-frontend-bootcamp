import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    flexDirection:'row',
    backgroundColor: '#2a2a2a',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#CED0CE',
  },
  input:{ 
    backgroundColor: '#2a2a2a',
    height:30,
    width: '100%',
    zIndex: 1,
    color: 'white',
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  clearButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
    marginRight: 12,
    position:'absolute',
    right:0,
    zIndex: 2,
    marginTop: 4
  },
  inputContainer:{
    flex:0.5,
    paddingHorizontal:10
  },
  textButton:{
    color:'white'
  },
  noResults:{
    color: 'white',
    alignSelf: 'center',
  }
 
});

export default styles; 