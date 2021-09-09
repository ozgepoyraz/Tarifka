import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin:10,
    alignItems: 'center',
    height: Dimensions.get('window').height / 4,
  },
  title: {
    textAlign: 'right',
    fontSize: 18,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
  },
  image: {
    flex: 1,
    width: Dimensions.get('window').width,
    borderRadius: 10,
    flexDirection: 'column-reverse',
  },
});

export default styles;
