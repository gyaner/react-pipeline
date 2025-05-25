import character_json from '../data/charecters.json';
import {ADD_CHARACTER,SAVE_DATA} from '../actions';
import { combineReducers } from 'redux';



function saveData(state=[],action){
    switch(action.type){
        case SAVE_DATA:
            let dt= [...state,...action.data];
            console.log(dt ,"Api Data in reducetr");
            return dt;
           
            default:
                return state;
    }

}



 function character(state=character_json,action){
    switch(action.type){
        case ADD_CHARACTER:
            let character = state.filter((item)=>item.id !== action.id)
            console.log("herrereeeeeeeeeeeeeeeeeeeeeeeeee",character.length,state.length, action)
            return character;
        default:
            //console.log(character,"???????????????????????")
            return state;
    }
}

 function heroes(state=[],action){
    switch(action.type){
        case ADD_CHARACTER:
            let hero=[...state, addhero(action.id)];
            return hero;
            default:
              return  state;

    }
}
//export default character;
function addhero(id){
    let ekhero= character_json.find((el)=>el.id===id)
    return ekhero;
}
const rootReducer =combineReducers({
    character,
    heroes,
    saveData
})

export default rootReducer;
