import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 375,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

class SimpleCard extends React.Component {
  handleButtonClick = () => {
    this.props.handleButtonClick();
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography>favicon site title </Typography>
          <Typography>bar: {this.props.text1}</Typography>
          <Typography>baz: {this.props.text2}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={this.handleButtonClick}
          >
            Generate
          </Button>
          
        </CardActions>
      </Card>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
