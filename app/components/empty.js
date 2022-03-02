import { width } from 'cli'
import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet
}from 'react-native'

function Empty(props){
    return(
        <View style={styles.container}>
            <Image style={styles.icon} source={require('../../icons/em.png')}></Image>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        height:600
    },
    icon:{
        width:300,
        height:300,
        marginVertical:50
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        color:'black'
    }
})


export default Empty