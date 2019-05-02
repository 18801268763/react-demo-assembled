import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

// console.log(PropTypes);
class App extends React.Component {
  componentDidMount(){
    console.log(this.props);
  }
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}
console.log(App);

App.propTypes = {
  name: PropTypes.string
};

export default App;
