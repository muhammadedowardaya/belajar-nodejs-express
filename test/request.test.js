import express from "express";
const request = require("supertest");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello World");
});

test("Test ExpressJS", async () => {
	const response = await request(app).get("/");
	expect(response.text).toBe("Hello World");
});
