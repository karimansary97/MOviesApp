import React, {Fragment} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';

import Text from './Text';
import colors from '../config/colors';
import Rating from '../components/Rating';


/**
 * reuseable component used in FeedsScreen and i will used in the future in My list with passing style as props to handle the Size 
  of the card  
 * 
 */


function Card({title, subTitle, imageUrl, onPress, rating}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
          /**
           * Note: Using poor api giving me only the path so I had to put it maunal and you could handle it api section by mapping 
             it and create your List with new keys also.
           * https://image.tmdb.org/t/p/w370_and_h556_multi_faces${imageUrl} 
           */
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${imageUrl}`,
            }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.ratingContainer}>
            <Rating rating={rating} />
          </View>
          {
            <Text style={styles.subTitle} numberOfLines={3}>
              {subTitle}
            </Text>
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginStart: 10,
    paddingTop: 180,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 220,
    height: 450,
    borderRadius: 20,
    backgroundColor: colors.light,
    marginHorizontal: 10,
  },
  card: {
    height: 270,
    width: 175,
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 5,
    marginTop: 30,
    overflow: 'hidden',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  ratingContainer: {
    marginStart: 40,
    alignItems: 'center',
    alignContent: 'center',
    paddingHorizontal: 50,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    maxWidth: 180,
    fontWeight: 'bold',
  },

  subTitle: {
    padding: 20,
    fontSize: 13,
    fontWeight: '300',
    maxWidth: 250,
    height: 250,
  },
});

export default Card;
