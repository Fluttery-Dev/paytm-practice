const express = require("express");
const rootRouter = require("./router/index");
const cors = require('cors');

const app = express();

app.use("/api/v1", rootRouter);
app.use(cors());
app.use(express.json());

app.listen(3000);