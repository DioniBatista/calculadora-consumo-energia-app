import React, {Component} from 'react';
import {Button} from "react-native";

export default class GenericButtonComponent extends Component{
    render(){
        return(
            <Button title = {this.props.title} onPress={this.props.action} />
        );
}
}