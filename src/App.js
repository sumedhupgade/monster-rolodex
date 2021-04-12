import { Component } from "react";
import './App.css';

import {CardList} from './components/card-list/card-list.component';
import { Searchbox } from "./components/searchbox/search-box.component";

class App extends Component {

  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    .catch(error => console.log("some error"));
  }

  render() {
    const { monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => 
     monster.name.toLowerCase().includes(searchField.toLowerCase()) 
      )
    return (
      <div className="App">
          <h1>Monster Rolodex</h1>
          <Searchbox
            placeholder="Search user"
            handelChange={e => this.setState({searchField : e.target.value})}
          ></Searchbox>
          <CardList monsters={filteredMonster}>
            
          </CardList>
      </div>
    );
  }

}

export default App;
