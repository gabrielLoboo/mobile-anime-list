import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RootStackParamList } from '../navigation';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SearchBar } from 'components/SearchBar';

type OverviewScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Overview'>;

export default function Overview() {
  const navigation = useNavigation<OverviewScreenNavigationProps>();
  const [animeList, setAnimeList] = useState([]);

  

  useEffect(()=>{

    const fetchAnime = async ()=>{

      const response = await fetch('https://api.jikan.moe/v4/top/anime');
      const data = await response.json();
      setAnimeList(data.data);
    }

    fetchAnime();
  }, [])

  const renderAnimeItem = ({ item }) => (
    <TouchableOpacity
    onPress={()=> navigation.navigate('Details', {anime: item})}
    >
      <View style={styles.card}>
        <Image
        style={styles.animeImage}
        source={{ uri: item.images.jpg.large_image_url }}  
        />
        <View style={styles.animeDetails}>
          <Text style={styles.animeTitle}>{item.title}</Text>
          <Text>{item.episodes} Episodes</Text>
          <View style={styles.animeDetailsScore}>
            <FontAwesome name="star" size={20} color="gold" />
            <Text> {item.score}</Text>
          </View>
          
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={animeList}
        renderItem={renderAnimeItem}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30,
  },

  animeTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  animeImage: {
    width: 100,
    height: 120,
    borderRadius: 10 
  },

  animeDetails: {
    flex: 1,
    padding: 10,
  },

  animeDetailsScore: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  card: {
    flex: 1,
    padding: 15,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#ffff',
    elevation: 3,
    flexDirection: 'row'
  }
});
