const nationalInsurance = require('../services/national-insurance');

// Pass in x-run-date header to use the date specified in the NI calculation, instead of defaulting to the current date.
module.exports = (req, res) => {
  res.send({
    income: req.income,
    ni: nationalInsurance(req.get('x-run-date'))(req.income),
  });
};
