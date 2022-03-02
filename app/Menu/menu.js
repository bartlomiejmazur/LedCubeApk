import React from 'react';
import {Button, SliderBase, Text, View} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const Menu = ({navigation}) =>{
    return(
        <View>
            <Text>Power</Text><Switch></Switch>
            <Button title='Animacja 1'></Button>
            <Button title='Animacja 2'></Button>
            <Button title='Animacja 3'></Button>
            <Button title='Animacja 4'></Button>
            
        </View>
    );
};

export default Menu;