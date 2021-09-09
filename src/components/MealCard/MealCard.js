import {
  Text,
  View,
  TouchableWithoutFeedback,
  ImageBackground,
} from 'react-native';
import styles from './MealCard.styles';
import React from 'react';

const MealCard = ({meal, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={{uri: meal.strMealThumb}}>
          <View>
            <Text style={styles.title}>{meal.strMeal}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MealCard;
