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

//n is how many items to generate
const generate = n => {
  let res = "";
  let selected = new Map();

  const options = [
    "zero ",
    "one ",
    "two ",
    "three ",
    "four ",
    "five ",
    "six ",
    "seven ",
    "eight ",
    "nine ",
    "ten ",
    "eleven ",
    "twelve ",
    "thirteen ",
    "fourteen ",
    "fifteen ",
    "sixteen ",
    "seventeen "
  ];

  //adds random items from options to selected
  while (selected.size < n) {
    const newRandom = getRandomInt(options.length);
    selected.set(newRandom, options[newRandom]);
  }

  selected.forEach(function(value, key) {
    res += value;
  });

  return res;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "press the button to generate results",
      text2: "foo"
    };
  }

  handleButtonClick = () => {
    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };

    if (getRandomInt(2) > 0) {
      this.setState({ text1: generate(3) });
      this.setState({ text2: generate(2) });
    } else {
      this.setState({ text1: generate(2) });
      this.setState({ text2: generate(3) });
    }
  };

  render() {
    //const { classes } = this.props;
    const text1 = this.state.text1;
    const text2 = this.state.text2;
    return (
      <SimpleContainer
        text1={text1}
        text2={text2}
        handleButtonClick={this.handleButtonClick}
      />
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
