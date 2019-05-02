import React from 'react';
// import logo from './logo.svg';
import './App.css';


 const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  console.log(props);
  console.log(other);
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
            Hello React!
      </Button>
    </div>
  );
};

export default App;
