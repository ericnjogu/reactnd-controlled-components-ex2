import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewItemInput from './NewItemInput';
import ItemList from './ItemList';

class App extends React.Component {
  state = {
    value: '',
  };

/*
had to add parenthesis to the event variable to fix 'undefined' errors
*/
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  addItem = (event, itemList) => {
    event.preventDefault();
    itemList.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Exercise 2 - Controlled Components</h1>
        </header>
        <h2>Shopping List</h2>
        <form onSubmit={this.addItem}>
          <NewItemInput
            value={this.state.value}
            handleChange={this.handleChange}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
		
		<ItemList/>
      </div>
    );
  }
}

export default App;
