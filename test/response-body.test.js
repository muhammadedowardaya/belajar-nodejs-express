import express from "express";
const request = require("supertest");
const app = express();

app.get("/", (req, res) => {
	res.set("Content-Type", "text/html");
	res.send(`<html><body>Hello World</body></html>`);
});

test("Test Response body", async () => {
	const response = await request(app).get("/");
	expect(response.get("Content-Type")).toContain("text/html");
	expect(response.text).toBe("<html><body>Hello World</body></html>");
});
