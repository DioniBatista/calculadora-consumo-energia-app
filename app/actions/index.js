import {actions} from "./actionTypes";

export const clickButton = value =>{
    return {
        type: actions.UPDATE_VALUE,
        newValue: value
    };
};