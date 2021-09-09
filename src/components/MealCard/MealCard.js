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
      <View>
        <ImageBackground
          style={styles.container}
          imageStyle= {{borderRadius: 10}}
          source={{uri: meal.strMealThumb}}>
          <View style={styles.titleBackground}>
            <Text style={styles.title}>{meal.strMeal}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default MealCard;
