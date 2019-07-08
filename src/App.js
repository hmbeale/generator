import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import SimpleContainer from "./components/simpleContainer.js";
import { sizeHeight } from "@material-ui/system";

const styles = theme => ({
  //no styles for now
  
});

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generate = () => {
  let res = '';
  let selected = new Map();
  
  const maxSelected = 5;
  
  const options = [
    'zero ',
    'one ',
    'two ',
    'three ',
    'four ', 
    'five ',
    'six ',
    'seven ', 
    'eight ', 
    'nine ', 
    'ten ', 
    'eleven ', 
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen '
  ]  

  //adds random items from options to selected 
  while (selected.size < maxSelected){
    const newRandom = getRandomInt(options.length)
    selected.set(newRandom, options[newRandom]);
  }

  selected.forEach(function(value, key){
    res += value;
  })

  return res;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "press the button to generate results",
    };
  }

  handleButtonClick = () => {
    this.setState({ text: generate() });
  };

  render() {
    //const { classes } = this.props;
    const text = this.state.text;
    return (
      <SimpleContainer
        text = {text}
        handleButtonClick={this.handleButtonClick}
      />
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
