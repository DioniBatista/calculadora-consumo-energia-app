import React, {Component} from 'react';
import {TextInput} from "react-native";

export default class GenericTextInputComponent extends Component{
    render(){
        return(
            <TextInput
                onChangeText={this.props.action}
                value={this.props.inputValue}
            />
        );
    }
}