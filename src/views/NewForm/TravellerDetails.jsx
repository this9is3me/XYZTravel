import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import DatePicker from "components/CustomInput/DatePicker.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

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


class TravellerDetails extends React.Component {
  render() {
    let classes = this.props.classes;
    let travellerObj = this.props.travellerObj;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>
                  Employee/ Traveller Details
                </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Name *"
                      id="tName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: travellerObj.travellerName,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "travellerName",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        travellerObj.hasTriedToContinue &&
                        travellerObj.travellerName == ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="NRIC/FIN"
                      id="tNRIC"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: travellerObj.travellerNRIC,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "travellerNRIC",
                            event.target.value
                          );
                        }
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Passport No. *"
                      id="tPassport"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: travellerObj.travellerPassportNum,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "travellerPassportNum",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        travellerObj.hasTriedToContinue &&
                        travellerObj.travellerPassportNum == ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Country of Origin *"
                      id="tOrigin"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: travellerObj.travellerCountryOrigin,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "travellerCountryOrigin",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        travellerObj.hasTriedToContinue &&
                        travellerObj.travellerCountryOrigin == ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Country of Destination *"
                      id="tOrigin"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: travellerObj.travellerCountryDest,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "travellerCountryDest",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        travellerObj.hasTriedToContinue &&
                        travellerObj.travellerCountryDest == ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <DatePicker
                      label="Travel Start Date *"
                      stateName="travellerStartDate"
                      setFormState={this.props.setFormState}
                      value={travellerObj.travellerStartDate}
                      disabled={this.props.disabled}
                      minDate={new Date(Date.now())}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <DatePicker
                      label="Travel End Date *"
                      stateName="travellerEndDate"
                      setFormState={this.props.setFormState}
                      value={travellerObj.travellerEndDate}
                      disabled={this.props.disabled}
                      minDate={new Date(travellerObj.travellerStartDate)}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

TravellerDetails.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(TravellerDetails);
