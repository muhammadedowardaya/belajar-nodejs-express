import express from "express";
const request = require("supertest");
const app = express();

app.get("/", (req, res) => {
	res.send(`Hello ${req.query.firstName} ${req.query.lastName}`);
});

test("Test ExpressJS", async () => {
	const response = await request(app)
		.get("/")
		.query({ firstName: "Edo", lastName: "Wardaya" });
	expect(response.text).toBe("Hello Edo Wardaya");
});
