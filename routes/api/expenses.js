const express= require("express");
const router = express.Router();

const expenses = require("../../Expenses");

// Gets all expenses
router.get("/", (req, res) => {
    // TODO - retrieve array of expenses from the database 
    // TODO - retrieve data using the request credentials
    res.json(expenses);
});

// Get single expense
router.get("/:id", (req, res) => {
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

// Create expense
router.post("/", (req, res) => {
    // Extract expense data from the request body
    const { name, date, cost, formattedCost, type } = req.body;

    if (!name || !date || !cost || !formattedCost || !type) {
        return res.status(400).json({ messge: "Please include name, date, cost, formatted cost and type" });
    }

    // TODO - create new expense in the database
    const newExpense = {
        id: Math.floor(Math.random() * 100000),
        name,
        date,
        cost,
        formattedCost,
        type
    }
    expenses.push(newExpense);

    res.json(expenses);
});

module.exports = router;