import React from 'react';
import {Button, Text, View} from 'react-native';


const Home = ({navigation})=>{
    return(
    <View>
            <Button title='Switch' onPress={()=> navigation.push('Menu')}></Button>
        </View>
    );
};

export default Home;