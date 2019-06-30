import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import TableList from "views/TableList/TableList.jsx";
import AllStatusIcon from "@material-ui/icons/List";
import PendingIcon from "@material-ui/icons/HourglassEmpty";
import CompletedIcon from "@material-ui/icons/CheckCircle";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    
    return (
      <div>
        <h3 style={{ top: "0px", position: "absolute" }}>Dashboard</h3>
        <GridContainer>
          <GridItem md={1}></GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <Icon>attach_money</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Spending</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  One Week Ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <PendingIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Pending Application</p>
                <h3 className={classes.cardTitle}>1</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <TimerIcon />
                  Processing...
                </div>
              </CardFooter>
            </Card>
          </GridItem>

          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <CompletedIcon />
                </CardIcon>
                <p className={classes.cardCategory}>Completed Applications</p>
                <h3 className={classes.cardTitle}>2</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Update />
                  Recent Traveller: Tan Ah Gao
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem md={1} />
          <GridItem xs={12} sm={12} md={10}>
            <CustomTabs
              title="Status:"
              headerColor="primary"
              tabs={[
                {
                  tabName: "All",
                  tabIcon: AllStatusIcon,
                  tabContent: <TableList status="all" />
                },
                {
                  tabName: "Pending",
                  tabIcon: PendingIcon,
                  tabContent: <TableList status="pending" />
                },
                {
                  tabName: "Processed/Completed",
                  tabIcon: CompletedIcon,
                  tabContent: <TableList status="completed" />
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
