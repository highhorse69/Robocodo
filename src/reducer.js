import {SEARCH_FIELD,
        PENDING_ROBOTS,
        SUCCESS_ROBOTS,
        FAILED_ROBOTS} from './constant.js';


const initialState={

    searchField:''

}




export const searchRobots=(state=initialState , action={})=>{
 

 switch(action.type){
   case SEARCH_FIELD:
   return Object.assign({}, state,{searchField:action.payload});

  default:

  return state;
}}

const rState={
  isPending:false,
  robots:[],
  error:''
}

export const getRobots=(state=rState, action={})=>{

  switch(action.type){

    case PENDING_ROBOTS:
    return Object.assign({},state,{isPending:false})

    case SUCCESS_ROBOTS:
    return Object.assign({},state,{robots:action.payload ,isPending:true});

    case FAILED_ROBOTS:
    return Object.assign({},state,{error:action.payload ,isPending:true});
    
    default:
    return state;
  }
}