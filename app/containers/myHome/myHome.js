import React, {Component} from 'react';
import {ScrollView,StyleSheet,View,FlatList,Image, Text,TouchableOpacity,Button} from 'react-native';
import {labels, titles} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {RoomsComponent} from "../../components/roomsComponent/roomsComponent";

export default class MyHome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            dataRooms : [{codeRoom:"1",default:true, iconName:'bath',name:"Banheiro",gadgets:{}},
                {codeRoom:"2",default:true, iconName:'tv',name:"Sala",gadgets:{}},
                {codeRoom:"3",default:true, iconName:'coffee',name:"Cozinha",gadgets:{}},
                {codeRoom:"4",default:true, iconName:'bed',name:"Quarto",gadgets:{}}]
        }
    }
    _keyExtractor = (item, index) => item.codeRoom;
    render(){
        return(
            <View>
                <FlatList
                    data={this.state.dataRooms}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <RoomsComponent item = {item}  />}
                />
            </View>

        );
    }
}
