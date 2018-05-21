import {actions} from "./actionTypes";

export const clickButton = value =>{
    return {
        type: actions.UPDATE_VALUE,
        newValue: value
    };
};

export const addNewRoom = value =>{
    return {
        type: actions.ADD_NEW_ROOM,
        room: value
    };
};
