import React from 'react';
import {StyleSheet, Text, View, FlatList, Dimensions,TouchableOpacity} from 'react-native';
import { equipments} from "../../constants";
import FontAwesome, {Icons} from "react-native-fontawesome";

export default class EquipmentList extends React.PureComponent  {
    constructor(props) {
        super(props);
        this.state = {
            selected: (new Map(): Map<string, boolean>),
            idItem: 0,
            equipmentSelectedList:[]
        }
       // this.props.contextHome.clearSelectionList = this.clearSelectionList;
    }

    _keyExtractor = (item, index) => item.description;

    _onPressItem = (id: string) => {
        this.setState((state) => {
            const selected = new Map(state.selected);
            //se selecionado novamente, remove da lista de selecionados
            if(selected.get(id)){
                selected.delete(id);

                var carSelectedList = this.state.equipmentSelectedList;
                for(var i in carSelectedList){
                    if(id == carSelectedList[i].id){
                       // this.props.contextHome.state.carSelectedList.splice(i,1);
                        this.state.equipmentSelectedList.splice(i,1)
                        break;
                    }
                }
            }else{
                selected.set(id, !selected.get(id));
               // this.props.contextHome.state.carSelectedList.push({id,carCode});
                this.state.equipmentSelectedList.push({id});
            }
            this.verifyMapSelection(id,selected);
            return {selected};
        });
    };

    clearSelectionList = () =>{
        this.setState({selected: (new Map(): Map<string, boolean>)});
    }

    verifyMapSelection = (id,selected) => {

        // if(selected.size == 0){
        //     this.props.hideMenu(this.props.contextHome);
        // }else if(selected.size == 1){
        //     this.props.showEditButton();
        // }else{
        //     this.props.hideEditButton(id,this.props.contextHome);
        // }
    }
    /*getDescription = (carCode) =>{
        return carDropDownList[carCode-1].description;
    }*/
    _renderItem = ({item}) => (
        <ListItemCustom
            id={item.description}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.description)}
            item={item}
            sizeList={this.state.selected.size}
        />
    );

    getEquipments = () =>{
        return this.props.data;
    }
    render() {
        return (
            <View style={styles.viewContainerList}>
                <FlatList style={styles.list}
                          data={this.getEquipments()}
                          extraData={this.state}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}
                />
            </View>
        );
    }
}

class ListItemCustom extends React.PureComponent {
    _onPress = () => {
        if(this.props.sizeList > 0){
            this.props.onPressItem(this.props.id);
        }
    };
    _onLongPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        const styleItem = this.props.selected ? styles.viewlistSelected: styles.viewlist;
        return (

            <TouchableOpacity onPress={this._onPress} onLongPress={this._onLongPress} style={styleItem}>
            <View>
                <View style={styles.containerItem}>
                 {/*image*/}

                    <Text style={styles.text}>
                        {this.props.item.description}
                    </Text>
                </View>
                <FontAwesome style={styles.lightning}>{Icons.bolt} {this.props.item.power}</FontAwesome>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    containerItem: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 30,
        fontSize: 16,
        marginLeft:30,
    },
    lightning: {
        fontSize: 20,
        color: '#ffcc00',
        position:'absolute',
        alignSelf:'flex-end',
        marginTop: 25,
        paddingRight:10,
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    viewContainerList:{
        height: '85%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewlist:{
        margin:2,
        borderRadius:7,
        backgroundColor:"#FFFFFF",
    },
    viewlistSelected:{
        margin:2,
        borderRadius:7,
        backgroundColor:'#5C89DB7F',
    },
    list:{
        borderTopWidth: 0,
        borderWidth: 0,
        top : 30,
        backgroundColor: 'transparent',
        width: Dimensions.get('window').width - 30,
        paddingLeft: 10,
        paddingRight: 10,
        height: 100,
        bottom: 100,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        position:'absolute',
        width:50,
        height:50,
        borderRadius: 30,
        backgroundColor: 'green',
        bottom: 30,
        right: 30,
        alignItems:'center',
        justifyContent:'center'
    },
    plus:{
        color: 'white',
        fontSize:25
    }
});