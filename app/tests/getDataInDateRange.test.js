const getDataInDateRange = require('../utils/getDataInDateRange');
const chartData = [
  {
    date_ms: 1641772800000,
    performance: 0.2,
  },
  {
    date_ms: 1641859200000,
    performance: 0.33,
  },
  {
    date_ms: 1641945600000,
    performance: 0.53,
  },
  {
    date_ms: 1642032000000,
    performance: 0.31,
  },
  {
    date_ms: 1642118400000,
    performance: 0.65,
  },
  {
    date_ms: 1642204800000,
    performance: 0.88,
  },
  {
    date_ms: 1642291200000,
    performance: 0.07,
  },
];

test('return correct range', () => {
  expect(getDataInDateRange(chartData, '2022-01-11', '2022-01-15'))
    .toHaveLength(4);

});

test('throw an error if date is invalid', () => {
  expect(() => {
    getDataInDateRange(chartData, '2022-0001-111', '2022-01-15');
  })
    .toThrow('start or end date is not valid');
});
test('throw an error if dates are flipped', () => {
  expect(() => {
    getDataInDateRange(chartData, '2022-01-15', '2022-01-11');
  })
    .toThrow('End Date is greater than the start date');
});
