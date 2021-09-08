import {Text, View, Image} from 'react-native';
import styles from './CategoryCard.styles';
import React from 'react';

const CategoryCard = ({category}) => {
  return (
    <View style= {styles.container}>
      <Image style= {styles.image} source={{uri: category.strCategoryThumb}} />
      <Text style= {styles.title}>{category.strCategory}</Text>
    </View>
  );
};
export default CategoryCard;
