import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Config from 'react-native-config';
import {FlatList} from 'react-native-gesture-handler';
import Loading from '../../components/Loading';
import MealCard from '../../components/MealCard';
import useFetch from '../../hooks/useFetch';
import styles from './Meals.styles';
import Error from '../../components/Error';

const Meals = ({route, navigation}) => {
  const {strCategory} = route.params;
  const {data, loading, error} = useFetch(Config.API_MEALS_URL + strCategory);

  const handleSelectedMeal = idMeal => {
    navigation.navigate('Details', {idMeal});
  };

  const renderMeals = ({item}) => (
    <MealCard
      meal={item}
      onSelect={() => handleSelectedMeal(item.idMeal)}></MealCard>
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals}></FlatList>
    </View>
  );
};

export default Meals;
