import express from "express";
const request = require("supertest");
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
	const name = req.cookies["name"];
	res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
	const name = req.body.name;
	res.cookie("Login", name, {
		path: "/",
	});
	res.send(`Hello ${name}`);
});

test("Test Cookie Read", async () => {
	const response = await request(app)
		.get("/")
		.set("Cookie", "name=Edo;author=Muhammad Edo Wardaya");
	expect(response.text).toBe("Hello Edo");
});

test("Test Cookie Write", async () => {
	const response = await request(app).post("/login").send({ name: "Edo" });
	expect(response.get("Set-Cookie").toString()).toBe("Login=Edo; Path=/");
});
