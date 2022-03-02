import React, { useState, useEffect } from 'react'
import type {Node} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity, ToastAndroid, ScrollView, VirtualizedList} from 'react-native'
import BluetoothLayout from '../components/bluetoothLayout';
import Empty from '../components/empty';
import Toggle from '../components/toggle';
import Subtitle from '../components/subtitle';
import Device from '../components/device';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { NavigationContainer } from '@react-navigation/native';

function BluetoothList({navigation}) {
  const [lista, setLista]= useState([]);
  const [bolEnable, setBolEnable] = useState(false);
  


const renderEmpty = () => <Empty text= 'Brak dostępnych urządzeń'/>
    const renderItem = ({item}) => {
        return <Device TouchableOpacity onPress={() => BluetoothSerial.connect(item.id)
            .then((res) =>{
                console.log(`Połączono z ${item.name}`);
                ToastAndroid.show(`Połączono z ${item.name}`, ToastAndroid.SHORT);navigation.navigate('Menu');
                
             
            
              
                
            })
            .catch((err) => console.log((err.message))) }{...item} iconLeft={require('../../icons/devices.png')} iconRight={require('../../icons/setting.png')}
        />};

        useEffect(() =>{
            
            async function init(){
                
                const enable = await BluetoothSerial.requestEnable();
                const lista = await BluetoothSerial.list();
                setLista(lista);
                setBolEnable(enable);
                
                
                
            }

            init();

            return() =>{
                async function remove(){
                    await BluetoothSerial.stopScanning();
                    console.log('Skanowanie zakończone');
                }
                remove();
            }
        }, [])

      
      
        
        const enableBluetooth = async () =>{
            try{
                await BluetoothSerial.requestEnable();
                const lista = await BluetoothSerial.list();
                await BluetoothSerial.stopScanning();
                setBolEnable(true);
                setLista(lista);
            }catch(error) {
                console.log(error);
            }
        };

        const disableBluetooth = async ()=>{
            try{
                await BluetoothSerial.disable();
                await BluetoothSerial.stopScanning();
                setBolEnable(false);
                setLista([]);
            }catch(error){
                console.log(error);
            }
        };

        const toggleBluetooth = value => {
            if(value){
                return enableBluetooth();
               
            }
            disableBluetooth();
        }

     
        

    return(
        <ScrollView>
        <BluetoothLayout title='Bluetooth'>
        <Button title='Sterowanie' onPress={()=> navigation.navigate('Menu')}></Button>
        <Toggle value={bolEnable} onValueChange={toggleBluetooth}/>
        <Subtitle title='Lista urządzeń'/>
        
            <FlatList
        data={lista}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
        />
        
        
        </BluetoothLayout>
        </ScrollView>
        
    )
}

export default BluetoothList