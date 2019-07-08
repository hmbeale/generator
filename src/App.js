import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import SimpleContainer from "./components/simpleContainer.js";

const styles = theme => ({
  //no styles for now
  
});

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generate = () => {
  let res = '';
  let selected = [];
  const maxSelected = 5;
  
  const options = {
    0: 'zero ',
    1: 'one ',
    2: 'two ',
    3: 'three ',
    4: 'four ', 
    5: 'five ',
    6: 'six ',
    7: 'seven ', 
    8: 'eight ', 
    9: 'nine ', 
    10: 'ten ', 
    11: 'eleven ', 
    12: 'twelve ',
    13: 'thirteen ',
    14: 'fourteen ',
    15: 'fifteen ',
    16: 'sixteen ',
    17: 'seventeen '
  }  

  for (let i = 0; i<maxSelected; i++){
    const newRandom = getRandomInt(Object.keys(options).length)
    selected.push(options[newRandom]);
    
  }

  res = selected.join(selected);
  return res;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "foo",
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
