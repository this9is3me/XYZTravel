//import DateFnsUtils from 'date-fns';
import DateFnsUtils from "@date-io/date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import PropTypes from "prop-types";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const useStyles = makeStyles({
  grid: {
    width: "60%"
  }
});

class DatePicker extends React.Component {
  render() {
    let selectedDate = this.props.value;

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <KeyboardDatePicker
            margin="normal"
            id="mui-pickers-date"
            label={this.props.label}
            value={new Date(this.props.value).toString()}
            onChange={event => {
              this.props.setFormState(this.props.stateName, Date.parse(event));
            }}
            disabled={this.props.disabled}
            minDate={this.props.minDate}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

DatePicker.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(DatePicker);
