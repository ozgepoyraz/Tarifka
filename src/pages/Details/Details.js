import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch';
import styles from './Details.styles';

const Details = ({route}) => {
  const {idMeal} = route.params;
  const {data, loading, error} = useFetch(
    Config.API_MEALS_INTRUCTIONS + idMeal,
  );

  const renderMealDetails = ({item}) => (
    <View>
      <Image style={styles.image} source={{uri: item.strMealThumb}}></Image>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.strMeal}</Text>
        <Text style={styles.areaTitle}>{item.strArea}</Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.textContainer}>
        <Text>{item.strInstructions}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Linking.openURL(item.strYoutube);
        }}>
        <Text style= {styles.buttonTitle}>Watch on Youtube</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMealDetails} />
    </View>
  );
};

export default Details;
