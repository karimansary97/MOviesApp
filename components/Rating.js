import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
function Rating({rating}) {
  const filledStars = Math.floor(rating / 2); 
  const maxStars = Array(5 - filledStars).fill('staro'); //empty star
  const rate = [...Array(filledStars).fill('star'), ...maxStars]; //using spread op to take complete array  with full stars and empty stars 
  
  return (
    /* 1-using ternary op to put .0 for interger numb by passing value to  it  and  transfer that value 
     to string to get the length and discover if more than 2 numbers.
    2-mapping the rate to put starts by giving key and type and pass them to AntDesing library that I imported it from apis
     */
    <View style={styles.rating}>
      {rating.toString().length > 2 ? ( 
        <Text style={styles.ratingNumber}>{rating}</Text>
      ) : (
        <Text style={styles.ratingNumber}>{rating}.0</Text>
      )}
      {rate.map((type, index) => {
        return <AntDesign key={index} name={type} size={12} color="tomato" />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingNumber: {fontSize: 14},
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4,
  },
});

export default Rating;
