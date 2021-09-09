import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 5,
    paddingHorizontal: 10,
    borderTopStartRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 10,
    borderTopEndRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdbdbd'
  },
  title: {
    fontSize: 18,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 10,
    width: Dimensions.get('window').height / 10,
    resizeMode: 'contain',
  },
});

export default styles;
