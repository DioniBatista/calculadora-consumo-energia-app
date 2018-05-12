import {actions} from "../actions/actionTypes";

export default (state = {newValue: 'Atualizado via Redux!'}, action) => {
    switch (action.type){
        case actions.UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};