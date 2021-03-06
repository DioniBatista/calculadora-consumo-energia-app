import React from 'react';
import {NavigationComponent} from "react-native-material-bottom-navigation/index";
import {StackNavigator, TabNavigator} from 'react-navigation';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Consumption from "../containers/consumption/consumption";
import MyHome from "../containers/myHome/myHome";
import Settings from "../containers/settings/settings";
import {labels} from "../constants";
import {TouchableOpacity} from "react-native";
import stackNav from "./stackNav";

const Navigation = TabNavigator({
    Consumption: { screen: Consumption,
        navigationOptions : {
            tabBarLabel: labels.consumption,
            tabBarIcon: () => (<FontAwesome style={{fontSize: 22}}>{Icons.lineChart}</FontAwesome>)
        }},
    MyHome: { screen: stackNav,
        navigationOptions : {
            tabBarLabel: labels.myHome,
            tabBarIcon: () => (<FontAwesome style={{fontSize: 22}}>{Icons.home}</FontAwesome>)
        }},
    Settings: { screen: Settings,
        navigationOptions : {
            tabBarLabel: labels.settings,
            tabBarIcon: () => (<FontAwesome style={{fontSize: 22}}>{Icons.cogs}</FontAwesome>)
        }}
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'black',
            rippleColor: 'white',
            tabs: {
                Consumption: {
                    barBackgroundColor: '#EF3B5D',
                    activeLabelColor: '#FFFFFF',
                    activeIcon: <FontAwesome style={{fontSize: 19, color:'#FFFFFF'}}>{Icons.lineChart}</FontAwesome>
                },
                MyHome: {
                    barBackgroundColor: '#4365C7', //'#5C89DB',
                    activeLabelColor: '#FFFFFF',
                    activeIcon: <FontAwesome style={{fontSize: 19, color:'#FFFFFF'}}>{Icons.home}</FontAwesome>
                },
                Settings: {
                    barBackgroundColor: '#4365C7',
                   // labelColor: '#434343',
                    activeLabelColor: '#FFFFFF',
                    activeIcon: <FontAwesome style={{fontSize: 19, color:'#FFFFFF'}}>{Icons.cogs}</FontAwesome>
                }
            }
        }
    }
});

export default Navigation;