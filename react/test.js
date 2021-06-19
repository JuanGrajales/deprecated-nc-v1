async function getUserTransaction(uid, txnType, monthYear) {
  const axios = require("axios");
  const moment = require("moment");

  let transactions = [];
  // Get the month to reference from monthYear
  const month = monthYear.slice(0, monthYear.indexOf("-"));

  // Set transactions array equal to the data you get from api
  try {
    const data = await axios.get(
      `https://jsonmock.hackerrank.com/api/transactions/search?txnType=${txnType}&userId=${uid}`
    );
    // console.log(data.data)
    transactions = data.data.data;
  } catch (error) {
    console.log("error", error);
  }

  // TODO: filter transactions for specific month and year
  const monthTransactions = data.filter((transaction) => {
    return moment(transaction.timestamp).format("MM-YYYY") === monthYear;
  });

  // TODO: calculate monthly average spending and store as var
  const average =
    monthTransactions.reduce(
      (accum, curr) => accum + parseFloat(curr.amount.slice(1)),
      0
    ) / monthTransactions.length;

  // TODO: loop through and check if transaction is greater than monthly average spending
  const transactionIds = monthTransactions.filter(
    (transaction) => parseFloat(transaction.slice(1)) <= average
  );

  return transactionIds;
}

getUserTransaction(4, "debit", "02-2019");
console.log(new Date(1548805761859).getMonth() + 1);
