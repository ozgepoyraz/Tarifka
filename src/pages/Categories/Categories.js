import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import styles from './Categories.styles';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/CategoryCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.API_CATEGORIES_URL);

  const handleSelectedCategory = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };
  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleSelectedCategory(item.strCategory)}></CategoryCard>
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data.categories}
        renderItem={renderCategories}
        keyExtractor={item => item.idCategory}
      />
    </View>
  );
};

export default Categories;
