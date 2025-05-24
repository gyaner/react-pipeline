export const ADD_CHARACTER='ADD_CHARACTER';
export const SAVE_DATA = 'SAVE_DATA';

export function addCharacterByid(id){

    const action ={
        type:'ADD_CHARACTER',
        id
    }
    return action;
}

export function saveData(data=[]){
    console.log(data,"save APIiiiiiiiiiii data here in action")
    const action ={
        type:'SAVE_DATA',
        data:data
    }
    return action;
}