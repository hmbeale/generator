import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SimpleCard from './simpleCard.js'

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 375,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(4)
  }
});

class SimpleContainer extends React.Component {

  handleButtonClick = () => {
    this.props.handleButtonClick();
  }

  render() {
    const { classes } = this.props;
    const text1 = this.props.text1;
    const text2 = this.props.text2;
    return (
      <Container >
        <SimpleCard 
          text1 = {text1}
          text2 = {text2}
          handleButtonClick={this.handleButtonClick}
        />
      </Container>
      
    );
  }
}

SimpleContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleContainer);
