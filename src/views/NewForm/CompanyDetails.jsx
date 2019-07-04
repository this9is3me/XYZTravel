import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

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
  ValidateUEN(uen) {
    var re1 = /^[0-9]{9}[a-zA-Z]$/;
    var re2 = /^[0-9]{10}[a-zA-Z]$/;
    var re3 = /^[s-tS-T][0-9]{2}[a-zA-Z]{2}[0-9]{4}[a-zA-Z]$/;

    return re1.test(uen) || re2.test(uen) || re3.test(uen);
  }

  render() { 
    let classes = this.props.classes;
    let companyObj = this.props.companyObj;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Company Details</h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={6} md={4}>
                    <CustomInput
                      labelText="Name *"
                      id="cName"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: companyObj.companyName,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "companyName",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        companyObj.hasTriedToContinue &&
                        companyObj.companyName == ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={6} md={4}>
                    <CustomInput
                      labelText="Unique Entity Number (UEN)"
                      id="uen"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: companyObj.companyUEN,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "companyUEN",
                            event.target.value
                          );
                          this.props.setFormState(
                            "companyIsValidUEN",
                            this.ValidateUEN(event.target.value)
                          );
                        }
                      }}
                      error={companyObj.companyUEN != "" 
                      && !this.ValidateUEN(companyObj.companyUEN)}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Address *"
                      id="cAddr"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: companyObj.companyAddr,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "companyAddr",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        companyObj.hasTriedToContinue &&
                        companyObj.companyAddr == ""
                      }
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="City *"
                      id="cCity"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: companyObj.companyCity,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "companyCity",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        companyObj.hasTriedToContinue &&
                        companyObj.companyCity == ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Country *"
                      id="cCountry"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: companyObj.companyCountry,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "companyCountry",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        companyObj.hasTriedToContinue &&
                        companyObj.companyCountry == ""
                      }
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Postal Code *"
                      id="cPostal"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        value: companyObj.companyPostal,
                        disabled: this.props.disabled,
                        onChange: event => {
                          this.props.setFormState(
                            "companyPostal",
                            event.target.value
                          );
                        }
                      }}
                      error={
                        companyObj.hasTriedToContinue &&
                        companyObj.companyPostal == ""
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
