import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import { Text, } from '../../components/Themed';


interface HomeCategoryProps {
    category: {
    id: string,
    title: string,
    movies: {
        id: string,
        poster: string
    }[]
  }
}

export default function HomeCategory(props: HomeCategoryProps) {
    const { category } = props;
  return (
      <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
      data={category.movies}
      renderItem={({item}) => ( <Image style={styles.image}  source={{uri: item.poster }}/>) }
      horizontal
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  
});
