import express from "express";
const request = require("supertest");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(3000, () => {
	console.info("Server is running on port 3000");
});
