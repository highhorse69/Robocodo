import React,{Component} from 'react';
import Cardlist from './Cardlist';
import {connect} from 'react-redux';
import SearchBox from './SearchBox';
import './App.css';
//import {robots} from './Robots';

import {setSearchField,roboSearch} from './action.js'



const mapStateToProps=state=>{

  return{
    searchField:state.searchRobots.searchField,
    robots:state.getRobots.robots,
    isPending:state.getRobots.isPending,
    error:state.getRobots.error
  }
}

  const mapDispatchToProps=(dispatch)=>{
   
    return{
      onSearchChange:(event)=>dispatch(setSearchField(event.target.value)),
      onRoboChange:()=>dispatch(roboSearch())
}
  }

class App extends Component

{ 
 

componentDidMount()
{
 
 this.props.onRoboChange();
}



    render(){
      
      const {searchField,onSearchChange,robots,isPending,error}=this.props;
       const filterRobots=robots.filter(abc=>{
    return abc.name.toLowerCase().includes(searchField.toLowerCase())
     })
         
   
    return(
    <div className='tc'>
              <h1 className='f1'>ROBOMONO</h1>
     <SearchBox searchChange={onSearchChange} />              
    
 <Cardlist robots={filterRobots} />
             
    </div>
  );


    }
}








export default connect(mapStateToProps , mapDispatchToProps)(App);
