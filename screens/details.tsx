import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { RootStackParamList } from '../navigation';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubeIframe from 'react-native-youtube-iframe';
import { WebView } from 'react-native-webview';


type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details({ route }) {
  const { anime } = route.params;


  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.animeImage}
        source={{ uri: anime.images.jpg.large_image_url }}

      / >     

      <View style={styles.card}>
        <View style={styles.cardInfos}>
        <FontAwesome name="bookmark" size={20} color="black" />
        <Text style={styles.cardText}> Genres: {anime.genres.map(genre => genre.name).join(', ')}</Text>
        </View>
      </View>

      <View style={styles.card}>
        
        <View style={styles.cardInfos}>
          <FontAwesome name="star" size={20} color="gold" />
          <Text style={styles.cardText}>Rating: {anime.score}</Text>
        </View>

        <Text>|</Text>

        <View style={styles.cardInfos}>
          <FontAwesome name="calendar" size={20} color="black" />
          <Text style={styles.cardText}> Year: {anime.year}</Text>
        </View>

      </View>

      <View style={styles.desc}>
        
        <Text style={styles.descTitle}>{anime.title}</Text>
        <Text style={styles.descSynopsis}>{anime.synopsis}</Text>

        <Text style={styles.descTitle}>Trailer</Text>       
          <YoutubeIframe
          height={210}
          play={true}
          videoId={anime.trailer.youtube_id} 
          />
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

  animeImage: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },

  card: {
    padding: 15,
    marginTop: 10,
    borderRadius: 20,
    backgroundColor: '#ffff',
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-around'
    
  },

  cardInfos: {
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',

  },

  cardText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },

  desc: {
    padding: 10
  },

  descTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 15,
    marginBottom:10
  },

  descSynopsis: {
    marginTop: 10,
  },

  video: {
    flex: 1,
    padding: 10,
    alignSelf: 'stretch'
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
