import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
    flexDirection: 'column-reverse',
    
  },
  titleBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignSelf: 'stretch',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10
  },
  title: {
    textAlign: 'right',
    fontSize: 18,
    padding: 10,
    color: 'white',
  },
});

export default styles;
