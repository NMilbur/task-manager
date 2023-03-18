require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mdbUsername = process.env.MONGO_DB_USERNAME;
const mdbPassword = process.env.MONGO_DB_PASSWORD;
const mdbCluster = process.env.MONGO_DB_CLUSTER;

const connString = `mongodb+srv://${mdbUsername}:${mdbPassword}@${mdbCluster}.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());

app.listen(5000, () => console.log("Server started on port 5000"));

mongoose.connect(connString);
const db = mongoose.connection;

db.on("error", (error: Error) => console.log(error));
db.once("connected", () => console.log("Database connection successful"));
