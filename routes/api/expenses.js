const express= require("express");
const router = express.Router();

const expenses = require("../../Expenses");

// Gets all expenses
router.get('/', (req, res) => {
    // TODO - retrieve array of expenses from the database 
    // TODO - retrieve data using the request credentials
    res.json(expenses);
});

module.exports = router;