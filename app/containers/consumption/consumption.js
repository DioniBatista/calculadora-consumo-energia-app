import React, {Component} from 'react';
import {View} from 'react-native';
import {labels} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Consumption extends Component{
    static navigationOptions = {
        tabBarLabel: labels.consumption,
        tabBarIcon: () => (<FontAwesome style={{fontSize: 22}}>{Icons.lineChart}</FontAwesome>)
    }

    render(){
        return(
            <View>

            </View>
        );
    }
}