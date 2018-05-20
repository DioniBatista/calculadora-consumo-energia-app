import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Dimensions, Button, FlatList, TouchableOpacity} from 'react-native';
import {dataRooms, labels} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import EquipmentList from "../../components/equipmentList/equipmentList";
import {RoomsComponent} from "../../components/roomsComponent/roomsComponent";
import NewCustomRoomModal from "../../components/newCustomRoomModal/newCustomRoomModal";

export default class NewRoom extends Component{

    constructor(){
        super();
        this.state = {
            dataRooms : dataRooms,
            showModalNewRoom : false
        };
    }
    _keyExtractor = (item, index) => item.codeRoom;

    isNotUsed =(value) =>{
        return !value.equipments.length > 0;
    }
    closeModal = ()=>{
        this.setState({showModalNewRoom:false});
    }
    newCustomRoom = (item) =>{
       // this.state.dataRooms.push(item);
        this.props.navigation.navigate("AddEquipment",{room: item, addEquipment: this.addEquipment});
        this.closeModal();
    }
    addEquipment = (item) =>{
        this.state.dataRooms.push(item);
    }

    render(){
        return(
            <View>
                {/*<TextInput
                           maxLength={25}
                           style={styles.input} underlineColorAndroid="transparent"
                           placeholder={labels.descriptionRoom} value={this.state.name}
                           onChangeText={(description) => this.setState({description})} />*/}

                <TouchableOpacity onPress={() => this.setState({showModalNewRoom:true})}>
                    <FontAwesome style={{backgroundColor: '#A269F4',fontSize: 20,paddingLeft:'20%',paddingTop:10,height:40,
                        color: '#FFF'}}>{Icons.plusSquare} {labels.addCustomRoom}</FontAwesome>
                </TouchableOpacity>
                <FlatList
                    data={this.state.dataRooms.filter(this.isNotUsed)}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <RoomsComponent item = {item}  />}
                />
                <NewCustomRoomModal show={this.state.showModalNewRoom} closeModal={this.closeModal} newCustomRoom={this.newCustomRoom} />
                {/*<View style={styles.viewList}>
                    <EquipmentList/>
                </View>*/}
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