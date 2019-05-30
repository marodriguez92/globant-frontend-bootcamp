import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  container: {
    flex: 0.5,
    flexDirection: 'row',
    margin: 10,
    alignContent: 'space-between',
    alignItems: 'flex-start'
  },
  info: {
    marginLeft: 10,
    flexGrow: 1,
    width: 0,
    
  },
  img:{ 
    width: 100, 
    height: 100 
  }
});

export default styles;