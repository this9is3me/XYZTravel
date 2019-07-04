class PastRecords {
  history = [];
  constructor() {
    // array of object to store past application info.
    // populate first with dummy data.
    this.history = [
      {
        companyName: "ABC Company",
        companyAddr: "6 Lorong Road",
        companyUEN: "123456789X",
        companyCity: "Singapore",
        companyCountry: "Singapore",
        companyPostal: "384993",
        applicantName: "Alfred",
        applicantContact: "93884838",
        applicantEmail: "alfred@abccompany.com",
        travellerName: "Benford",
        travellerNRIC: "S83948393M",
        travellerPassportNum: "3492384X",
        travellerCountryOrigin: "Singapore",
        travellerCountryDest: "England",
        travellerStartDate: 1562716800000,
        travellerEndDate: 1563216800000,
        statusRecord: "pending",
        travelCost: ""
      },
      {
        companyName: "DEF Company",
        companyAddr: "9 Jalan Street",
        companyUEN: "9876543210X",
        companyCity: "Singapore",
        companyCountry: "Singapore",
        companyPostal: "755343",
        applicantName: "Charlie",
        applicantContact: "86632838",
        applicantEmail: "charlie@defcompany.com",
        travellerName: "Darlene",
        travellerNRIC: "S93438311G",
        travellerPassportNum: "92849299S",
        travellerCountryOrigin: "Singapore",
        travellerCountryDest: "Korea",
        travellerStartDate: 1560124800000,
        travellerEndDate: 1560556800000,
        statusRecord: "completed",
        travelCost: "2500"
      },
      {
        companyName: "GHI Pte Ltd",
        companyAddr: "3 Green Road",
        companyUEN: "111111111A",
        companyCity: "Singapore",
        companyCountry: "Singapore",
        companyPostal: "123123",
        applicantName: "Fred",
        applicantContact: "82938293",
        applicantEmail: "fred@ghipteltd.com",
        travellerName: "Gen",
        travellerNRIC: "S81923213B",
        travellerPassportNum: "6859933X",
        travellerCountryOrigin: "Singapore",
        travellerCountryDest: "India",
        travellerStartDate: 1559124800000,
        travellerEndDate: 1559556800000,
        statusRecord: "completed",
        travelCost: "8000"
      }
    ];
  }

  addRecord(newRecord) {
    this.history.push(newRecord);
    console.log("list of records: ", this.history);
  }

  getRecord(index) {
    return this.history[index];
  }

  getAllRecords() {
    return this.history;
  }

  getPendingRecords() {
    let IsPending = function(historyObj) {
      return historyObj.statusRecord == "pending";
    };

    const pending = this.history.filter(IsPending);
    console.log("pending:", pending);
    return pending;
  }

  getProcessedRecords() {
    let IsNotPending = function(historyObj) {
      return historyObj.statusRecord != "pending";
    };

    const processed = this.history.filter(IsNotPending);
    console.log("compelted:", processed);
    return processed;
  }

  numRecords() {
    return this.history.length;
  }

  numPendingRecords() {
    return this.history.length - this.numProcessedRecords();
  }

  numProcessedRecords() {
    let IsPending = function(historyObj) {
      return historyObj.statusRecord != "pending";
    };

    const processed = this.history.filter(IsPending);
    return processed.length;
  }
}

const pastrecords = new PastRecords();

export default pastrecords;
