import React,{Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Button 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DeckView from './DeckView';
import NewDeckView from './NewDeckView';


// displays the title of each Deck
// displays the number of cards in each deck
const Stack = createStackNavigator({
    DeckView: {
      screen: DeckView
    },
    NewDeckView:{
        screen: NewDeckView
    }
  })

export default class DeckListView extends Component{

    doNothing = () => {
        this.props.navigation.navigate('NewDeckView')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>The title of the each Card Deck</Text>
                <Text>Number of cards within Card Deck</Text>
                <Button 
                    title='Add new Card Deck'
                    style={styles.button} onPress={(this.doNothing)}>
                </Button>
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
    button :{
        color: '#ff0000',
    }
  });

