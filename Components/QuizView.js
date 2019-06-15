import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// displays a card question
// an option to view the answer (flips the card)
// a "Correct" button
// an "Incorrect" button
// the number of cards left in the quiz
// Displays the percentage correct once the quiz is complete

export default class QuizView extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>QuizView</Text>
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