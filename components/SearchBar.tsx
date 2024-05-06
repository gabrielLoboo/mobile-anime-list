import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons';

export const SearchBar = () =>{

    return (

        <View style={styles.wrap}>
            <TextInput 
            style={styles.input}
            placeholder="Descubra novos Animes!"
            />
            <View style={styles.icon}>
                <FontAwesome
                name="search"
                size={20}
                />
            </View>
        </View>
    );
}

export const styles = StyleSheet.create({

    wrap: {
        borderWidth: 1,
        flexDirection: "row",
        borderRadius: 30,
        padding: 5,
        height: "auto",
        margin: 10,
    },

    icon: {
        marginVertical: 20,
        
    },

    input: {
        height: 40,
        width: "85%",
        margin: 12,
        fontSize: 15,
        padding: 10,
        borderRadius: 15
    }
})