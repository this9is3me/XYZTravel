
// @material-ui/core components
import React from 'react';

// nodejs library to set properties for components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        margin: 'auto',
        marginTop: '50px',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    block:
    {
        display: 'block'
    }
}));

function GenerateReactFragment(textHeader, textValue, classes) {
    // handle dates
    if (textHeader == "Travel From" || textHeader == "Travel To") {
        textValue = new Date(textValue).toString();
    }
    return (
        <React.Fragment>
            <Typography
                component="span"
                variant="body2"
                className={classes.block}
                color="textPrimary"
            >
                {textHeader}
            </Typography>
            {textValue}
        </React.Fragment>
    );
}

export default function ViewDetails(props) {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            {props.children}
            <ListItem alignItems="flex-start">

                <ListItemText
                    primary="Company Details"
                    secondary={
                        <React.Fragment>
                            {GenerateReactFragment("Name", props.recordObj.companyName, classes)}
                            {GenerateReactFragment("UEN", props.recordObj.companyUEN, classes)}
                            {GenerateReactFragment("Address", props.recordObj.companyAddr, classes)}
                            {GenerateReactFragment("Postal Code", props.recordObj.companyPostal, classes)}
                            {GenerateReactFragment("City", props.recordObj.companyCity, classes)}
                            {GenerateReactFragment("Country", props.recordObj.companyCountry, classes)}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="Applicant Details"
                    secondary={
                        <React.Fragment>
                            {GenerateReactFragment("Name", props.recordObj.applicantName, classes)}
                            {GenerateReactFragment("Contact", props.recordObj.applicantContact, classes)}
                            {GenerateReactFragment("Email", props.recordObj.applicantEmail, classes)}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider component="li" />
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary="Employee/Traveller Details"
                    secondary={
                        <React.Fragment>
                            {GenerateReactFragment("Name", props.recordObj.travellerName, classes)}
                            {GenerateReactFragment("NRIC/FIN", props.recordObj.travellerNRIC, classes)}
                            {GenerateReactFragment("Passport No.", props.recordObj.travellerPassportNum, classes)}
                            {GenerateReactFragment("Country of Origin", props.recordObj.travellerCountryOrigin, classes)}
                            {GenerateReactFragment("Country of Destination", props.recordObj.travellerCountryDest, classes)}
                            {GenerateReactFragment("Travel From", props.recordObj.travellerStartDate, classes)}
                            {GenerateReactFragment("Travel To", props.recordObj.travellerEndDate, classes)}
                        </React.Fragment>
                    }
                />
            </ListItem>
        </List>
    );
}

