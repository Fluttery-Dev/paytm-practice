const express = require("express");
const rootRouter = require("./router/index");

const app = express();

app.use("/api/v1", rootRouter);