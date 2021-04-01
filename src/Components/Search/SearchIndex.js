import React, { Component } from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      input: ""
    }
  }

  searchFunction() {
    //TODO: filter Array
    //TODO: display matching results
    let filteredArray = [];
    if (this.state.input !== ""){
      filteredArray = this.state.things.filter(word => word === this.state.input);
      
    } else {
      filteredArray = [...this.state.things];
    };
    return ( 
    <ul>
      {filteredArray.map(thing => <li>{thing}</li>)}
    </ul>);
 }

 //TODO: setState in the value field to this.state.input
 render() {
   return(
     <div>
       <Input placeholder='Search Here' value={this.state.input} onChange={event => this.setState({input : event.target.value})}/>
       <h3>Results:</h3>
        {this.searchFunction()}
     </div>
   )
 }
};
 
export default SearchIndex;
