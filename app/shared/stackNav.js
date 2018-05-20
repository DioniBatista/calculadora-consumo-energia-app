import React, { Component } from 'react';
import {StackNavigator} from "react-navigation";
import Settings from "../containers/settings/settings";
import {TouchableOpacity} from "react-native";
import MyHome from "../containers/myHome/myHome";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {titles} from "../constants";
import NewRoom from "../containers/newRoom/newRoom";
import AddEquipment from "../containers/equipment/addEquipment";

const stackNav = StackNavigator({
    MyHome: {
        screen: MyHome,
        navigationOptions: ({navigation}) => ({
            title: titles.myHome,
            headerRight:(
                <TouchableOpacity onPress={() => navigation.navigate('NewRoom')}>
                    <FontAwesome style={{fontSize: 25, marginRight:10, color: '#FFF'}}>{Icons.plusSquare}</FontAwesome>
                </TouchableOpacity>
            ),
            headerTintColor: '#FFF',
            headerStyle: { backgroundColor: '#4365C7', paddingRight: 10, paddingLeft: 10 }
        })

    },
    NewRoom:{
        screen: NewRoom,
        navigationOptions:({navigation}) => ({
            title: titles.newRoom,
            headerTintColor: '#FFF',
            headerStyle: {  backgroundColor: '#4365C7'}
        })
    },
    AddEquipment:{
        screen: AddEquipment,
    }
})

export default stackNav;