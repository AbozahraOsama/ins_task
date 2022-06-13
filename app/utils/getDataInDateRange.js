const moment = require('moment');

function getDataInDateRange(data, startDate, endDate) {
  let startDateMomentObj = moment(startDate);
  let endDateMomentObj = moment(endDate);

  if (!startDateMomentObj.isValid() || !endDateMomentObj.isValid()) {
    throw new Error('start or end date is not valid');
  }

  if (startDateMomentObj.isAfter(endDateMomentObj)) {
    throw new Error('End Date is greater than the start date');
  }

  if (startDateMomentObj.isBefore(endDateMomentObj)) {
    return data.filter((item) => {
      let currentDate = moment(item.date_ms);
      if (startDateMomentObj.isBefore(currentDate, 'day') && (currentDate.isSameOrBefore(endDateMomentObj, 'day'))) {
        return item;
      }
      return false;
    });
  }
}

module.exports = getDataInDateRange;
