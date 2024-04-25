import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RootStackParamList } from '../navigation';
import { FontAwesome } from '@expo/vector-icons';

type DetailsSreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

export default function Details({ route }) {
  const { anime } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.animeImage}
        source={{ uri: anime.images.jpg.large_image_url }}

      / >     
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
    </View>
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
    margin: 10,
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
  }
});
