import express from "express";
const request = require("supertest");
const app = express();

app.get("/", (req, res) => {
	res.send(`Hello ${req.query.name}`);
});

test("Test ExpressJS", async () => {
	const response = await request(app).get("/").query({ name: "World" });
	expect(response.text).toBe("Hello World");
});
