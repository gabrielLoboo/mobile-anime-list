import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native'



export const Carousel = ()=> {

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Characters</Text>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
  });