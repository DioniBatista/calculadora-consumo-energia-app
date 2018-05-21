import React, {Component} from 'react';
import { View, StyleSheet, Dimensions, FlatList, TouchableOpacity} from 'react-native';
import { labels} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {RoomsComponent} from "../../components/roomsComponent/roomsComponent";
import NewCustomRoomModal from "../../components/newCustomRoomModal/newCustomRoomModal";
import {addNewRoom} from "../../actions";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class NewRoom extends Component{

    constructor(){
        super();
        this.state = {
            dataRooms : [],
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
    //passa para a página 'add Equipment' os dados do novo Room, e func callback add Room com os
    //equipments
    newCustomRoom = (item) =>{
        this.props.navigation.navigate("AddEquipment",{room: item, addEquipment: this.addEquipment});
        this.closeModal();
    }
    addEquipment = (item) =>{
       // this.setState({dataRooms:this.props.rooms});
        //this.state.dataRooms.push(item);
        this.props.addNewRoom(item);
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => this.setState({showModalNewRoom:true})}>
                    <FontAwesome style={{backgroundColor: '#A269F4',fontSize: 20,paddingLeft:'20%',paddingTop:10,height:40,
                        color: '#FFF'}}>{Icons.plusSquare} {labels.addCustomRoom}</FontAwesome>
                </TouchableOpacity>
                <FlatList
                    data={this.props.rooms.filter(this.isNotUsed)}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <RoomsComponent item = {item}  />}
                />
                <NewCustomRoomModal show={this.state.showModalNewRoom} closeModal={this.closeModal} newCustomRoom={this.newCustomRoom} />
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
    return {rooms: state.sessionState.rooms};
}

const mapDispathToProps = (dispatch) => {
    return bindActionCreators({addNewRoom}, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(NewRoom);

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