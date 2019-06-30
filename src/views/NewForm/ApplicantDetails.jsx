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

class CompanyDetails extends React.Component {
  Validate(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  render() {

    let classes = this.props.classes;
    let applicantObj = this.props.applicantObj;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Applicant Details</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={4}>
                    <CustomInput
                      labelText="Name *"
                      id="aName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: applicantObj.applicantName,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "applicantName",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        applicantObj.hasTriedToContinue &&
                        applicantObj.applicantName == ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={3}>
                    <CustomInput
                      labelText="Contact Number *"
                      id="aContact"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: applicantObj.applicantContact,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "applicantContact",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        applicantObj.hasTriedToContinue &&
                        applicantObj.applicantContact == ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <CustomInput
                      labelText="Email *"
                      id="aEmail"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: applicantObj.applicantEmail,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "applicantEmail",
                            event.target.value
                          );
                          this.props.setFormState(
                            "applicantIsValidEmail",
                            this.Validate(event.target.value)
                          );
                        }
                      }}
                      error={
                        (applicantObj.applicantEmail == "" &&
                          applicantObj.hasTriedToContinue) ||
                        (applicantObj.applicantEmail != "" &&
                          !this.Validate(applicantObj.applicantEmail))
                      }
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

CompanyDetails.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CompanyDetails);
