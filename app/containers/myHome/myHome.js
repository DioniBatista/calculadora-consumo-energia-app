import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,FlatList,Image, Text,TouchableOpacity,Button} from 'react-native';
import {dataRooms, labels, titles} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {RoomsComponent} from "../../components/roomsComponent/roomsComponent";

export default class MyHome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataRooms : dataRooms
        }
    }
    _keyExtractor = (item, index) => item.codeRoom;

    inUse =(value) =>{
        return value.equipments.length > 0;
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.dataRooms.filter(this.inUse)}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <RoomsComponent item = {item}  />}
                />
            </View>

        );
    }
}
