const express = require("express");
const cors = require("cors");
const connection = require("./db");
const todos = require("./routes/todos");
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use("/api/todos", todos);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
