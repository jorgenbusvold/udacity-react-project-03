import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// An option to enter in the title for the new deck
// An option to submit the new deck title


export default class NewDeckView extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>New Deck View</Text>
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