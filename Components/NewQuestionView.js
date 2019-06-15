import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// An option to enter in the question
// An option to enter in the answer
// An option to submit the new question


export default class NewQuestionView extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <Text>NewQuestionView</Text>
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