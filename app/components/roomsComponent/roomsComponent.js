import React from 'react';
import {StyleSheet,View,Image, Text,TouchableOpacity} from 'react-native';
import FontAwesome, {Icons} from "react-native-fontawesome";

export const RoomsComponent = (props) => (
    <TouchableOpacity onPress={()=>alert("oi" + props.item.codeRoom)}>
        <View>
            <View style={styles.container}>
                {props.item.default ?  <FontAwesome style={styles.icon}>{Icons[props.item.iconName]}</FontAwesome>
                                    :
                    <FontAwesome style={styles.icon}>{Icons.image}</FontAwesome>
                }

                <Text style={styles.text}>
                    {props.item.name}
                </Text>
            </View>
            <FontAwesome style={styles.lightning}>{Icons.bolt} 20 kWh</FontAwesome>
            <View style={styles.separator} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
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
    icon: {
        fontSize: 45
    },
    photo: {
        width: 45,
        height:45
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
});