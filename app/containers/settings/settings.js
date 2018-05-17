import React, {Component} from 'react';
import {View} from 'react-native';
import {labels} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class Settings extends Component{
    static navigationOptions = {
        tabBarLabel: labels.settings,
        tabBarIcon: () => (<FontAwesome style={{fontSize: 22}}>{Icons.cogs}</FontAwesome>)
    }

    render(){
        return(
            <View>

            </View>
        );
    }
}