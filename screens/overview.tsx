import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import { Button } from '../components/Button';
import { RootStackParamList } from '../navigation';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

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
    <TouchableOpacity>
      <View style={styles.card}>
        <Image
        style={styles.animeImage}
        source={{ uri: item.images.jpg.large_image_url }}  
        />
        <Text style={styles.animeTitle}>{item.title}</Text>
        
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anime List</Text>
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
    padding: 24,

  },

  title: {
    fontWeight: 'bold',
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 30
  },

  animeTitle: {
    fontSize: 20,
    padding: 10,
    marginBottom: 5,
    fontWeight: 'bold'
  },

  animeImage: {
    width: 100,
    height: 100,
    borderRadius: 10 
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
