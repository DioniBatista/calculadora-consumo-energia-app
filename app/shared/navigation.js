import React from 'react';
import {NavigationComponent} from "react-native-material-bottom-navigation/index";
import { TabNavigator } from 'react-navigation'
import {  View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {labels} from "../constants";


class MoviesAndTV extends React.Component {
    static navigationOptions = {
        tabBarLabel: labels.consumption,
        tabBarIcon: () => (<Icon size={24} color="white" name="timeline" />)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Consumo</Text>
            </View>
        );
    }
}

class Music extends React.Component {
    static navigationOptions = {
        tabBarLabel: labels.myHome,
        tabBarIcon: () => (<Icon size={24} color="white" name="home" />)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class Newsstand extends React.Component {
    static navigationOptions = {
        tabBarLabel: labels.settings,
        tabBarIcon: () => (<Icon size={24} color="white" name="settings" />)
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
            </View>
        );
    }
}



const Navigation = TabNavigator({
    Newsstand: { screen: MoviesAndTV },
    MoviesAndTV: { screen: Music },
    Music: { screen: Newsstand }
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'white',
            rippleColor: 'white',
            tabs: {
                MoviesAndTV: {
                    barBackgroundColor: '#37474F'
                },
                Music: {
                    barBackgroundColor: '#00796B'
                },
                Newsstand: {
                    barBackgroundColor: '#EEEEEE',
                    labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
                    activeLabelColor: '#212121',
                    activeIcon: <Icon size={24} color="#212121" name="newsstand"/>
                }
            }
        }
    }
});
export default Navigation;