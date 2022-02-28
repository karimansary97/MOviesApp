import React, {useRef} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import Text from '../components/Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Screen from '../components/Screen';
import colors from '../config/colors';
function DetailsScreen({route}) {
  /**
   * Details Screen 
   * by passing route we could get the item we passed in FeedsScreen with navigation and extract the data from it
   *  
   * ****Features
   * *VideoPlayer import Video from 'react-native-video' and i had to install  react-native-video-controls to turn controlls in android  
   */
  const movies = route.params;
  return (
    <Screen>
      <View style={styles.container}>
        <Video
          source={{
            uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          }}
          usePoster={false}
          resizeMode="cover"
          style={styles.backgroundVideo}
          controls={true}
          paused={true}
          poster={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXk479gmH8OvI1YlAY59Hy_9w0ZrxOzFyYHA&usqp=CAU`}
          posterResizeMode="cover"
        />

        <View style={styles.details}>
          <Text style={styles.title}> {movies.title} </Text>
          <View style={{flexDirection: 'row', width: '30%'}}>
            <View style={styles.ageContainer}>
            
              {movies.adult == false ? <Text>+12</Text> : <Text>+18</Text>   /** adult come with boolean type  */}
            </View>
            <Text style={styles.year}>{movies.release_date}</Text>
            <MaterialIcons name="hd" size={24} color={colors.white} />
          </View>
          <Pressable
            onPress={() => {
              console.warn('plage');
            }}
            style={styles.playButton}>
            <Text style={styles.playButtonText}>
              <Entypo name="controller-play" size={16} color={colors.black} />
              Play
            </Text>
          </Pressable>
          <Pressable
            onPress={() => {
              console.warn('plage');
            }}
            style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>
              <AntDesign name="download" size={16} color={colors.white} />{' '}
              download
            </Text>
          </Pressable>
          <Text style={styles.overview}>{movies.overview}</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <View style={{alignItems: 'center', marginHorizontal: 15}}>
            <AntDesign name="plus" size={24} color={colors.white} />
            <Text style={{color: 'darkgrey', marginTop: 5}}>My List</Text>
          </View>
          <View style={{alignItems: 'center', marginHorizontal: 20}}>
            <Feather name="thumbs-up" size={24} color={colors.white} />
            <Text style={{color: 'darkgrey', marginTop: 5}}>Rate</Text>
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  year: {
    color: colors.white,
  },
  details: {
    marginStart: 5,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    marginVertical: 7,
    color: colors.white,
  },
  backgroundVideo: {
    width: 200,
    height: 250,
    aspectRatio: 16 / 9,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    borderRadius: 2,
    alignItems: 'center',
    paddingHorizontal: 3,
    marginHorizontal: 10,
  },
  playButton: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderRadius: 3,
    marginVertical: 7,
  },
  playButtonText: {
    width: '20%',
    alignItems: 'center',
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  downloadButton: {
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 3,
    marginVertical: 6,
  },
  downloadButtonText: {
    width: '30%',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 14,
    padding: 2,
    color: colors.white,
  },
});

export default DetailsScreen;
