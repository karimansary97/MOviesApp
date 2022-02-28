import {useEffect} from 'react';
import {API_KEY} from '../config/api';
/**
 * initialize  var called API_URL  with back so i could pass the url easilly with api_key that i exported from config file 
 * then make exported name funcation to fetch the data with async and await (syntax sugar) of asynchronous and return the result 
 * 
 * 
 * *****************************************************************************
 * Tec Note 
 * _________
 * we could make coustom hook here if we want to called that api called in another screen and 
 * That will help us for decrease the mess could happen  
 * but right now  I'm trying to  make it clear for anyone   
 */
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

export const getMovies = async () => {
  try {
    let response = await fetch(API_URL);
    let movies = await response.json(); // to handle json 
    return movies.results;
  } catch (err) {
    console.log(err);
  }
};
