import React from 'react'
import{
    View,Text,TouchableOpacity,StyleSheet,Image, Button
} from 'react-native';
import Separator from './separator';

function Device(props){
    return(
        <>
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
            <View style={styles.wrapperLeft}>
                <Image style={styles.iconLeft} source={props.iconLeft}/>
            </View>
            <View style={styles.wrapperName}>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <Image style={styles.iconRight} source={props.iconRight}/>
        </TouchableOpacity>
        <Separator />
        </>
        
    )
}

const styles = StyleSheet.create({
    wrapper:{
       flexDirection:'row',
       paddingLeft:20,
       paddingRight:20,
       alignItems:'center',
       padding:10,
       justifyContent:'space-between',
       
    },
    wrapperLeft:{
        width:80,
        height:80,
        borderRadius:60,
        borderColor:'gray',
        borderWidth:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    iconLeft:{
        width:50,
        height:50
    },
    wrapperName:{
       flex:1, justifyContent:'flex-start', marginLeft: 30,

    },
    name:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black'

    },
    iconRight:{
        width:40,
        height:40,
    },

})
export default Device