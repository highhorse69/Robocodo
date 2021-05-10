import {SEARCH_FIELD,
        PENDING_ROBOTS,
        SUCCESS_ROBOTS,
        FAILED_ROBOTS} from './constant.js'


export const setSearchField = (text)=> {
return {

    type: SEARCH_FIELD,
    payload: text
}
}

export const roboSearch=()=>(dispatch)=>{

    dispatch({type:PENDING_ROBOTS});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>dispatch({type:SUCCESS_ROBOTS,payload:data}))
    .catch(error=>dispatch({type:FAILED_ROBOTS,payload:error}) )   
  
}

