import React, {Component} from 'react';
import {View} from 'react-native';
import {labels} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class MyHome extends Component{
    static navigationOptions = {
        tabBarLabel: labels.myHome,
        tabBarIcon: () => (<FontAwesome style={{fontSize: 22}}>{Icons.home}</FontAwesome>)
    }

    render(){
        return(
            <View>

            </View>
        );
    }
}