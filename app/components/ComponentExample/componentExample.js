import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {clickButton} from "../../actions";
import GenericButtonComponent from "../Button/genericButtonComponent";
import {labels} from "../../constants";
import GenericTextInputComponent from "../TextInput/genericTextInputComponent";

class ComponentExample extends Component{
    state = {
        inputValue: ''
    }

    render(){
        const {clickButton,newValue} = this.props;
        return(
            <View>

                <GenericTextInputComponent valueInput={this.state.inputValue} action={(inputValue) => this.setState({inputValue})}/>
                <GenericButtonComponent title={labels.updateStateButton} action = {() => clickButton(this.state.inputValue)} />
                <Text>{newValue}</Text>

                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const mapStateToProps = (state) =>{
 return {newValue: state.clickState.newValue};
}

const mapDispathToProps = (dispatch) => {
    return bindActionCreators({clickButton}, dispatch);
}

export default connect(mapStateToProps, mapDispathToProps)(ComponentExample);