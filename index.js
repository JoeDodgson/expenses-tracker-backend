const { Console } = require('console');
const express= require("express");
const expensesRouter = require("./routes/api/expenses");

const app = express();

// Set up body parser middleware to be able to handle json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Expenses API routes
app.use("/api/expenses", expensesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));