import express from "express";
const request = require("supertest");
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser("CONTOHRAHASIA"));

app.get("/", (req, res) => {
	const name = req.signedCookies["Login"];
	res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
	const name = req.body.name;
	res.cookie("Login", name, {
		path: "/",
		signed: true,
	});
	res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
	const response = await request(app)
		.get("/")
		.set(
			"Cookie",
			"Login=s%3AEdo.IUt%2BEjIaYHZFtumbsnuNR2SljKRnRU0tllze53C1N3w; Path=/"
		);
	expect(response.text).toBe("Hello Edo");
});

test("Test Cookie Write", async () => {
	const response = await request(app).post("/login").send({ name: "Edo" });
	console.info(response.get("Set-Cookie"));
	expect(response.get("Set-Cookie").toString()).toContain("Edo");
});
