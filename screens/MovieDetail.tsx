import React from 'react'
import { Text, View } from '../components/Themed';
import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { MaterialIcons, Entypo, AntDesign, Feather, Ionicons, FontAwesome } from '@expo/vector-icons';
import movie from '../assets/data/movie';

const firstEpisode = movie.seasons.items[0].episodes.items[0]

function MovieDetail() {
    return (
        <View>
            <Image source={{ uri: firstEpisode.poster }} style={styles.image}/>
            <View style={{ padding: 12}}>
            <Text style={styles.title}>{movie.title}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.match}>98% Match</Text>
                <Text style={styles.year}>{movie.year}</Text>
                <View style={styles.ageContainer}>
                    <Text style={styles.age}>12+</Text>
                </View>
                <Text style={styles.year}>{movie.numberOfSeasons} Seasons</Text>
                <MaterialIcons name='hd' size={24} color='white' />
                </View>
{/* Play Button */}
                <Pressable onPress={()=> console.warn('Play')} style={styles.play}>
                    <Text style={styles.playText}>
                        <Entypo name="controller-play" size={24} color="black" />
                        {' '}
                        Play</Text>
                </Pressable>
                {/* Download button */}
                <Pressable onPress={()=> console.warn('Downloading')} style={styles.download}>
                    <Text style={styles.downloadText}>
                        <AntDesign name="download" size={24} color="white" />
                        {' '}
                        Download</Text>
                </Pressable>
                <Text style={{marginVertical: 10}}>{movie.plot}</Text>
                <Text style={styles.year}>Cast: {movie.cast}</Text>
                <Text style={styles.year}>Creator: {movie.creator}</Text>
                {/* Row with Icon Buttons */}
                <View style={{flexDirection: 'row', marginTop: 20,}}>
                    <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                        <AntDesign name="plus" size={24} color="white"/>
                        <Text style={{ color: 'darkgrey', marginTop: 5, }}>My List</Text>
                    </View>
                    <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                        <Feather name="thumbs-up" size={24} color="white"/>
                        <Text style={{ color: 'darkgrey', marginTop: 5,}}>Rate</Text>
                    </View>
                    <View style={{alignItems: 'center', marginHorizontal: 20,}}>
                        <FontAwesome name="send-o" size={24} color="white"/>
                        <Text style={{ color: 'darkgrey', marginTop: 5, }}>Share</Text>
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
    aspectRatio: 16/9,
    resizeMode: 'contain',
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold'
  },
  match: {
      color: '#00aa00',
      fontWeight: 'bold',
      marginRight: 5,
  },
  age: {
      color: 'black',
      fontWeight: 'bold',
  },
  year: {
      color: '#757575',
      marginRight: 5,
  },
  ageContainer: {
      backgroundColor: '#e6e229',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 2,
      paddingHorizontal: 3,
      marginRight: 5,
  },
  play: {
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 3,
      marginVertical: 5,
  },
  playText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',


  },
  download: {
      backgroundColor: '#2b2b2b',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderRadius: 3,
      marginVertical: 5,
  },
  downloadText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
})

export default MovieDetail


