import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {dataRooms} from "../../constants";
import {RoomsComponent} from "../../components/roomsComponent/roomsComponent";
import {connect} from "react-redux";

 class MyHome extends Component{

    constructor(props) {
        super(props);
        // this.state = {
        //     dataRooms : dataRooms
        // }
    }
    _keyExtractor = (item, index) => item.codeRoom;

    inUse =(value) =>{
        return value.equipments.length > 0;
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.props.rooms.filter(this.inUse)}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <RoomsComponent item = {item}  />}
                />
            </View>

        );
    }
}

const mapStateToProps = (state) =>{
    return {rooms: state.sessionState.rooms};
}

export default connect(mapStateToProps, {})(MyHome);
