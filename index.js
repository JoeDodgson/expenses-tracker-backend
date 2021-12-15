const { Console } = require('console');
const express= require("express");
const expensesRouter = require("./routes/api/expenses");

const app = express();

// Expenses API routes
app.use("/api/expenses", expensesRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));