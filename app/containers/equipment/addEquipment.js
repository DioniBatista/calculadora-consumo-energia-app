import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Dimensions, Button, FlatList, TouchableOpacity} from 'react-native';
import {dataRooms, equipments, labels, titles} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import EquipmentList from "../../components/equipmentList/equipmentList";
import {RoomsComponent} from "../../components/roomsComponent/roomsComponent";
import NewCustomRoomModal from "../../components/newCustomRoomModal/newCustomRoomModal";

export default class AddEquipment extends Component{
    static navigationOptions=({navigation}) => ({
        title: labels.equipments + " - "+ navigation.state.params.room.name,
        headerTintColor: '#FFF',
        headerStyle: {  backgroundColor: '#4365C7'}
    })

    constructor(props){
        super(props);
        this.state = {
            room : this.props.navigation.state.params.room,
            equipments : this.props.navigation.state.params.room.equipments
        };
    }
    add=()=>{
        this.setState({equipments:[{"id":"1", "description":"Lâmpada", "image":"", "voltage": "127", "power":"30","powerStandby":"10"}]});
       // this.state.equipments.push({"id":"1", "description":"Lâmpada", "image":"", "voltage": "127", "power":"30","powerStandby":"10"});
        //this.props.navigation.state.params.addEquipment(this.state.room);
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => this.add() }>
                    <FontAwesome style={{backgroundColor: '#A269F4',fontSize: 20,paddingLeft:'20%',paddingTop:10,height:40,
                        color: '#FFF'}}>{Icons.plusSquare} {labels.addNewEquipment}</FontAwesome>
                </TouchableOpacity>
                {alert("as")}
                {this.state.equipments.length > 0 ? <EquipmentList data={this.state.equipments}/>
                    :
                    <View/>
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FE',
        alignItems: 'center',
    },
    input: {
        position: 'relative',
        margin:20,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        top:20,
        fontSize: 16,
        paddingLeft: 20,
        width: Dimensions.get('window').width - 30,

    },
    viewList:{
        position: 'relative',
        borderWidth: 2,
        borderColor: 'blue',
        height:'80%'
    },
    cancel:{
        position: 'absolute',
        top: '60%',
        left:"15%",
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#EF3B5D',
        borderRadius:180,
    },
    accept:{
        position: 'absolute',
        top: '60%',
        right: "15%",
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#00E675',
        borderRadius:180,
    },
    toastSuccess:{
        backgroundColor:'#00E675'
    },
    toastError:{
        backgroundColor:'#EF3B5D'
    }
});