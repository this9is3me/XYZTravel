import React from "react";
import ReactDOM from "react-dom";
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
import CompanyDetails from "views/NewForm/CompanyDetails.jsx";
import ApplicantDetails from "views/NewForm/ApplicantDetails.jsx";
import TravellerDetails from "views/NewForm/TravellerDetails.jsx";

// for storing the data
import pastRecords from "PastRecords.js";

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

class NewForm extends React.Component {
  IsPageValid() {
    if (
      this.state.companyName == "" ||
      this.state.companyAddr == "" ||
      this.state.companyCity == "" ||
      this.state.companyCountry == "" ||
      this.state.companyPostal == "" ||
      (this.state.companyUEN != "" && !this.state.companyIsValidUEN) ||
      this.state.applicantName == "" ||
      this.state.applicantContact == "" ||
      this.state.applicantEmail == "" ||
      !this.state.applicantIsValidEmail ||
      this.state.travellerName == "" ||
      this.state.travellerPassportNum == "" ||
      this.state.travellerCountryOrigin == "" ||
      this.state.travellerCountryDest == "" ||
      this.state.travellerStartDate > this.state.travellerEndDate
    ) {
      console.log("false");
      return false;
    } else 
    {
      console.log("true");
      return true;
    }
  }

  // store all the input state for the form
  state = {
    btnState: "",
    hasTriedToContinue: false,

    companyName: "",
    companyAddr: "",
    companyUEN: "",
    companyCity: "",
    companyCountry: "",
    companyPostal: "",
    companyIsValidUEN: false,

    applicantName: "",
    applicantContact: "",
    applicantEmail: "",
    applicantIsValidEmail: false,

    travellerName: "",
    travellerNRIC: "",
    travellerPassportNum: "",
    travellerCountryOrigin: "",
    travellerCountryDest: "",
    travellerStartDate: Date.now(),
    travellerEndDate: Date.now()
  };

  toBeSubmittedRecord = () => { 
    return {
      companyName: this.state.companyName ,
      companyAddr: this.state.companyAddr ,
      companyUEN: this.state.companyUEN ,
      companyCity: this.state.companyCity ,
      companyCountry: this.state.companyCountry ,
      companyPostal: this.state.companyPostal ,

      applicantName: this.state.applicantName ,
      applicantContact: this.state.applicantContact ,
      applicantEmail: this.state.applicantEmail ,

      travellerName: this.state.travellerName ,
      travellerNRIC: this.state.travellerNRIC ,
      travellerPassportNum: this.state.travellerPassportNum ,
      travellerCountryOrigin: this.state.travellerCountryOrigin ,
      travellerCountryDest: this.state.travellerCountryDest ,
      travellerStartDate: this.state.travellerStartDate ,
      travellerEndDate: this.state.travellerEndDate, 
      statusRecord: 'pending',
      travelCost: ''
    };
  };

  companyObject = () => {
    return {
      companyName: this.state.companyName,
      companyAddr: this.state.companyAddr,
      companyUEN: this.state.companyUEN,
      companyCity: this.state.companyCity,
      companyCountry: this.state.companyCountry,
      companyPostal: this.state.companyPostal,
      hasTriedToContinue: this.state.hasTriedToContinue
    };
  };

  applicantObject = () => {
    return {
      applicantName: this.state.applicantName,
      applicantContact: this.state.applicantContact,
      applicantEmail: this.state.applicantEmail,
      hasTriedToContinue: this.state.hasTriedToContinue
    };
  };

  travellerObject = () => {
    return {
      travellerName: this.state.travellerName,
      travellerNRIC: this.state.travellerNRIC,
      travellerPassportNum: this.state.travellerPassportNum,
      travellerCountryOrigin: this.state.travellerCountryOrigin,
      travellerCountryDest: this.state.travellerCountryDest,
      travellerStartDate: this.state.travellerStartDate,
      travellerEndDate: this.state.travellerEndDate,
      hasTriedToContinue: this.state.hasTriedToContinue
    };
  };

  setFormState = (nameState, valueState) => {
    this.setState({
      [nameState]: valueState
    });
  };

  render() {
    let classes = this.props.classes;
    let disabled = false;
    if (this.state.btnState == "continue") disabled = true;

    // confirmation state
    if (this.state.btnState == "continue")
      return (
        <div>
          <h3 style={{ top: "0px", position: "absolute" }}>Confirmation</h3>
          <GridContainer>
          <GridItem md={1}>
          </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <CompanyDetails
                setFormState={this.setFormState}
                companyObj={this.companyObject()}
                disabled={disabled}
              />
              <ApplicantDetails
                setFormState={this.setFormState}
                applicantObj={this.applicantObject()}
                disabled={disabled}
              />
              <TravellerDetails
                setFormState={this.setFormState}
                travellerObj={this.travellerObject()}
                disabled={disabled}
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">

          <GridItem md={2}>
          </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Button
                onClick={() => {
                  this.setState({ btnState: "" });
                  //scroll to top
                  document.getElementsByClassName("ps")[0].scroll(0, 0);
                }}
              >
                Back
              </Button>
              <Button
                onClick={() => {
                  this.setState({ btnState: "submit" });
                  //scroll to top
                  document.getElementsByClassName("ps")[0].scroll(0, 0);
                  pastRecords.addRecord(this.toBeSubmittedRecord());
                }}
                color="primary"
              >
                Submit
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      );
    else if (this.state.btnState == "submit")
      return (
        <div>
          <h3 style={{ top: "0px", position: "absolute" }}>Acknowledgement</h3>
          <GridContainer>
          <GridItem md={1}>
          </GridItem>
          <GridItem> Thank you for your submission. It may take 2-3 days to be processed.
                    You can view your past submissions at the dashboard.
          </GridItem>
          </GridContainer>
        </div>
      );
    // form creation state
    else
      return (
        <div>
          <h3 style={{ top: "0px", position: "absolute" }}>
            Application
          </h3>
          <GridContainer>

          <GridItem md={1}>
          </GridItem>
            <GridItem xs={12} sm={12} md={10}>
              <CompanyDetails
                setFormState={this.setFormState}
                companyObj={this.companyObject()}
                disabled={disabled}
              />
              <ApplicantDetails
                setFormState={this.setFormState}
                applicantObj={this.applicantObject()}
                disabled={disabled}
              />
              <TravellerDetails
                setFormState={this.setFormState}
                travellerObj={this.travellerObject()}
                disabled={disabled}
              />
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">

          <GridItem md={2}>
          </GridItem>
            <GridItem xs={12} sm={3} md={3}>
              <Button
                onClick={() => {
                  //scroll to top
                  document.getElementsByClassName("ps")[0].scroll(0, 0);
                  if (!this.IsPageValid())
                    this.setState({ hasTriedToContinue: true });
                  else {
                    this.setState({ btnState: "continue" });
                  }
                }}
                color="primary"
              >
                Continue
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      );
  }
}

NewForm.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(NewForm);
