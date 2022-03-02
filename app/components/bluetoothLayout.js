import React from 'react'
import{
    Button,
    View,
    Text,
    StyleSheet
} from 'react-native'

function BluetoothLayout(props){
    return(
        
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:20,
        paddingVertical:25,
        backgroundColor: 'white'
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black'

    },
})
export default BluetoothLayout