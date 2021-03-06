import React from 'react';
import './App.css';
import UserInput from './components/userInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends React.Component {
  state = {
    userNames : ['Ogre','Magi']
  }

  nameChangeHandler = (event) => {
    this.setState({
      userNames:[event.target.value,'Magi']
    })
  }
  render() {
    return (
      <div className="App" >
        <UserInput change={this.nameChangeHandler.bind(this)} name={this.state.userNames[0]}/>
        <UserOutput name={this.state.userNames[0]} />
        <UserOutput name={this.state.userNames[1]} />
      </div>
    );
  }
}

export default App;
