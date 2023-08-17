import express from "express";
const request = require("supertest");
const app = express();

app
	.route("/product")
	.get((req, res) => {
		res.send("Get Product");
	})
	.post((req, res) => {
		res.send("Create Product");
	})
	.put((req, res) => {
		res.send("Update Product");
	});

test("Test Route Function", async () => {
	let response = await request(app).get("/product");
	expect(response.text).toBe("Get Product");

	response = await request(app).post("/product");
	expect(response.text).toBe("Create Product");

	response = await request(app).put("/product");
	expect(response.text).toBe("Update Product");
});
