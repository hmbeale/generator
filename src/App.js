import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import SimpleContainer from "./components/simpleContainer.js";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import { sizeHeight } from "@material-ui/system";

const styles = theme => ({
  //no styles for now
});

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

//returns n generated items 
const generate = n => {
  let res = "";
  //use map so no duplicates
  let selected = new Map();

  const options = [
    "Alteration ",
    "Conjuration ",
    "Destruction ",
    "Enchanting ",
    "Illusion ",
    "Restoration ",
    "Archery ",
    "Block ",
    "Heavy Armor ",
    "One Handed ",
    "Smithing ",
    "Two Handed ",
    "Alchemy ",
    "Light Armor ",
    "Lockpick ",
    "Pickpocket ",
    "Sneak ",
    "Speech "
  ];

  //adds random items from options to selected
  while (selected.size < n) {
    const newRandom = getRandomInt(options.length);
    selected.set(newRandom, options[newRandom]);
  }

  selected.forEach(function(value, key) {
    res += value;
  });

  //return res;
  return selected
};

//generate and format function? 
//take out of handleClick? 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: "",
      text2: ""
    };
  }

  handleButtonClick = () => {
    const getRandomInt = max => {
      return Math.floor(Math.random() * Math.floor(max));
    };

    let counter = 0;

    if (getRandomInt(2) > 0) {
      //3-2 split
      counter = 3;
    } else {
      //2-3 split
      counter = 2;
    }

    //allText is a map not a string
    const allText = generate(5);
    
    let tempText1 = '';
    let tempText2 = '';

    //assigns either a 3-2 split or 2-3 split depending on counter
    allText.forEach(function(value, key){
      if (counter>0){
        tempText1 += value;
      }else{
        tempText2 += value;
      }

      counter--;
    })

    this.setState({ text1: tempText1 });
    this.setState({ text2: tempText2 });

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
