import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    margin: 5
  },
  image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
  },
  title: {fontSize: 28, fontWeight: 'bold', color: '#a52a2a'},
  areaTitle: {
      fontSize: 20, 
      fontWeight: 'bold',
      color: '#a52a2a'
  },
  line: {
      borderBottomWidth: 1
  },
  button: {
      backgroundColor: 'red',
      alignItems: 'center',
      margin: 10,
      height: Dimensions.get('window').height/ 15,
      borderRadius: 8,
      justifyContent: 'center'  
  },
  buttonTitle: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
  }
});

export default styles;
