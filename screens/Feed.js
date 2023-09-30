import *as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Feed extends React.Component {
    render(){
        return( 
           <View style = {styles.container}>
                <Text> style = {styles.text} Feed </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        backgroundColor: 'green',
        fontSize: 22,
        fontFamily: 'arial',
        marginTop: 'center',
    }
})
