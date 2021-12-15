const express= require("express");
const router = express.Router();

const expenses = require("../../Expenses");

// Gets all expenses
router.get('/', (req, res) => {
    // TODO - retrieve array of expenses from the database 
    // TODO - retrieve data using the request credentials
    res.json(expenses);
});

// Get single expense
router.get('/:id', (req, res) => {
    // Obtain expense id from url parameter
    const expenseId = parseInt(req.params.id);

    // Check if an expense with the provided id exists
    const found = expenses.some(expense => expense.id === expenseId);

    if (found) {
        res.json((expenses.filter(expense => expense.id === expenseId)));
    } else {
        res.status(400).json({ messge: `No expense with the id of ${expenseId}` });
    }
});

module.exports = router;