import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import {labels} from "../../constants";
import FontAwesome, { Icons } from 'react-native-fontawesome';

export default class NewCustomRoomModal extends Component {
    state = {
        codeRoom:"",
        default:false,
        iconName:'image',
        name:"",
        equipments:[],
    };

    addRoom = ()=>{
        this.props.newCustomRoom(this.state);
    }

    render() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.props.show}
                onRequestClose={() => {
                    this.props.closeModal();
                }} >
                <View style={styles.container}>
                    <View style={styles.subContainer}>
                        <View style={styles.header}>
                            <Text style={styles.textHeader}>{labels.addCustomRoom}</Text>
                        </View>
                        <View >
                            <TextInput
                                maxLength={25}
                                style={styles.input} underlineColorAndroid="transparent"
                                placeholder={labels.descriptionRoom} value={this.state.name}
                                onChangeText={(name) => this.setState({name})} />
                        </View>
                        <View style={styles.cancel} >
                            <TouchableOpacity onPress={() => this.props.closeModal()}>
                                <FontAwesome style={{fontSize: 40, color: '#FFF'}}>{Icons.times}</FontAwesome>
                            </TouchableOpacity>
                        </View>
                        <View style={this.state.name.length > 0 ? styles.accept : styles.acceptDisabled } >
                            <TouchableOpacity onPress={() => this.state.name.length > 0 ? this.addRoom() : {}}>
                                <FontAwesome style={{fontSize: 40,color: '#FFF'}}>{Icons.check}</FontAwesome>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0000003F',
        width: '100%',
        height: '100%',
        top: '8%',
        left: '0%',
    },
    subContainer:{
        backgroundColor: '#FFF',
        borderRadius: 20,
        width: '90%',
        height: Dimensions.get('window').height - (Dimensions.get('window').height/1.5),
        position:'absolute',
        top: '12%',
        left: '5%',
    },
    input: {
        position: 'relative',
        margin:15,
        height: 50,
        borderWidth: 1,
        borderRadius: 20,
        top:3,
        fontSize: 20,
        paddingLeft: 20,
        width: Dimensions.get('window').width - 70,
    },
    header:{
        position: 'relative',
        backgroundColor: '#F4F6FE',
        borderBottomColor:'#FFF',
        borderBottomWidth:2,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        width: '100%',
        padding: 10,
    },
    textHeader:{
        fontSize:20,
    },
    cancel:{
        position: 'absolute',
        top: "65%",
        left:"15%",
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:'#EF3B5D',
        borderRadius:180,

    },
    accept:{
        position: 'absolute',
        top: "65%",
        right: "15%",
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:'#00E675',
        borderRadius:180,
    },
    acceptDisabled:{
        position: 'absolute',
        top: "65%",
        right: "15%",
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        backgroundColor:'#bcbec7',
        borderRadius:180,
    }
});
