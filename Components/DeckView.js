import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// displays the title of the Deck
// displays the number of cards in the deck
// displays an option to start a quiz on this specific deck
// An option to add a new question to the deck

export default class DeckView extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>DeckView</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
