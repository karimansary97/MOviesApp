import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Card from '../components/Card';
import {getMovies} from '../api/client';
import Screen from '../components/Screen';
import colors from '../config/colors';
import SearchInput from '../components/SearchInput';

/**
 * FeedScreen and the main Screen of the app in Feed navigator 
 * 
 */
function FeedsScreen({navigation}) {
  const [movies, setMovies] = useState([]);
  const [tempMovies, setTempMovies] = useState([]);
  
  const fetchData = async () => {
    // using funcation to get the data from api and called it in use effect because use effect didn't love word async :(  
    const movies = await getMovies();

    setMovies(movies);
    setTempMovies(movies);
  };

  useEffect(() => {
    // to fetch data when  the app start and you remove remove the empty and and put moves as dep 
    fetchData();
    console.log(movies);
  }, []);
  searchMovies = value => {
    /**
     * methode help us to filter the array we get from api to make real-time search 
     * 1-create new array called tempMovies so i could search right now in it without filter the main list
     * 2- don't worry about the value onChangetext will take care of what the user enter and pass it to the funcation   
     * by using indexOf we could return two values true and false if true will numb of index else give you - 1 
     */
    const filteredMovies = tempMovies.filter(movie => {
      let movieLowerCase = movie.title.toLowerCase();

      let searchTermLowerCase = value.toLowerCase();

      return movieLowerCase.indexOf(searchTermLowerCase) > -1;
    });

    setMovies(filteredMovies);
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <SearchInput
          onChangeText={value => {
            searchMovies(value);
          }}
        />
        <FlatList
          horizontal={true}
          data={movies}
          keyExtractor={movie => {
            movie.id;
          }}
          renderItem={({item}) => {
            return (
              <Card
                title={item.title}
                subTitle={item.overview}
                rating={item.vote_average}
                imageUrl={item.poster_path}
                onPress={() => {
                  //navigate you to other detailScreen by pass the first parm the name of the Target Screen  and 
                  //the other param i passed the item that  flatlist give to us to show it in the target screen  
                  navigation.navigate('ListingDetails', item);
                }}
              />
            );
          }}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: colors.dark,
  },

});

export default FeedsScreen;
