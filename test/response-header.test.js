import express from "express";
const request = require("supertest");
const app = express();

app.get("/", (req, res) => {
	res.set({
		"X-Powered-By": "Programmer Zaman Now",
		"X-Author": "Muhammad Edo Wardaya",
	});
	res.send("Hello Response");
});

test("Test Response Header", async () => {
	const response = await request(app).get("/");
	expect(response.text).toBe("Hello Response");
	expect(response.get("X-Powered-By")).toBe("Programmer Zaman Now");
	expect(response.get("X-Author")).toBe("Muhammad Edo Wardaya");
});
