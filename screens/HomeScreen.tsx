import * as React from 'react';
import { StyleSheet, Image, FlatList, Pressable } from 'react-native';
import categories from '../assets/data/categories';
import { Auth } from 'aws-amplify';
import EditScreenInfo from '../components/EditScreenInfo';
import HomeCategory from '../components/HomeCategory';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const onLogout = () => {
    Auth.signOut();
  }
  return (
    
    
    <View style={styles.container}>
      <Pressable onPress={onLogout} >
        <Text style={{color: 'red'}}>Logout</Text>
      </Pressable >
      <FlatList
      data={categories.items}
      renderItem={({item})=> <HomeCategory category={item}/>}/>
    </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
