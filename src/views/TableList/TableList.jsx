import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Box from '@material-ui/core/Box';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Modal from '@material-ui/core/Modal';
import PageviewIcon from "@material-ui/icons/Pageview";
import CloseIcon from "@material-ui/icons/Close";

// for retrieving the data
import pastRecords from "PastRecords.js";

import ViewDetails from "views/TableList/ViewDetails.jsx";
import tableStyle from "assets/jss/material-dashboard-react/components/tableStyle.jsx";



function recordObjectToTableRow(recordObj, index, classes, clickModal) {
    let tablerow = (
        <TableRow key={index} className={classes.tableBodyRow}>
            <TableCell>{recordObj.travellerName}</TableCell>
            <TableCell>{recordObj.companyName}</TableCell>
            <TableCell>{recordObj.statusRecord}</TableCell>
            <TableCell>{recordObj.travelCost}</TableCell>
            <TableCell className={classes.tableActions}>
                <Tooltip
                    id="tooltip-top"
                    title="View Details"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                >
                    <IconButton className={classes.tableActionButton}
                        onClick={() => clickModal(recordObj)}>
                        <PageviewIcon
                            className={classes.tableActionButtonIcon + " " + classes.edit}
                        />
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    );

    return tablerow;
}

class TableList extends React.Component {
    state = {
        modalOpen: false,
        selectedRecordObj: {}
    }

    clickModal = (recordObj) => {
        this.setState({
            modalOpen: !this.state.modalOpen,
            selectedRecordObj: recordObj
        });
        console.log(this.state.modalOpen);
    };

    render() {
        const { classes, tableHeaderColor } = this.props;

        let tableData;
        switch (this.props.status) {
            case "all": tableData = pastRecords.getAllRecords();
                break;
            case "pending": tableData = pastRecords.getPendingRecords();
                break;
            case "completed": tableData = pastRecords.getProcessedRecords();
                break;
        }
        return (
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Modal open={this.state.modalOpen} onClose={this.clickModal}
                        style={{ overflow: 'scroll', }}>
                        <Box>
                            <ViewDetails recordObj={this.state.selectedRecordObj}>
                                <IconButton onClick={() => this.clickModal()} className={classes.tableActionButton}
                                    style={{ float: 'right' }}>
                                    <CloseIcon
                                        className={classes.tableActionButtonIcon + " " + classes.edit}
                                    />
                                </IconButton>
                            </ViewDetails>
                        </Box>
                    </Modal>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                    <Table className={classes.table}>
                        <TableHead className={classes.primaryTableHeader}>
                            <TableRow className={classes.tableHeadRow}>
                                <TableCell
                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                >
                                    Traveller Name
              </TableCell>
                                <TableCell
                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                >
                                    Company Name
              </TableCell>
                                <TableCell
                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                >
                                    Status
              </TableCell>
                                <TableCell
                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                >
                                    Travel Cost
              </TableCell>
                                <TableCell
                                    className={classes.tableCell + " " + classes.tableHeadCell}
                                >
                                    Action
              </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData
                                .map((recordObj, index) =>
                                    recordObjectToTableRow(recordObj, index, classes, this.clickModal)
                                )}
                        </TableBody>
                    </Table>
                </GridItem>
            </GridContainer>
        );
    };
}

TableList.propTypes = {
    classes: PropTypes.object
};

export default withStyles(tableStyle)(TableList);
