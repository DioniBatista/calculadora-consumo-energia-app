import {actions} from "../actions/actionTypes";
import {dataRooms, equipments} from "../constants";

const initialState = {
    equipments: equipments,
    rooms: dataRooms
}

export default (state = initialState, action) => {
    switch (action.type){

        case actions.ADD_NEW_ROOM:
            return {
                ...state,
                rooms: abc(action.room,state)
            };
        default:
            return state;
    }
};
abc=(item, state)=>{
    let a = state.rooms;
    a.push(item);

    return a;
}