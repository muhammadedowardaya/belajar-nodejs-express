import express from "express";
const app = express();

app.get("/", (req, res) => {
	if (req.query.name) {
		res.status(200);
		res.end(`Hello ${req.query.name}`);
	} else {
		res.status(400);
		res.end(`Gak ada apa apa didieu`);
	}
});

app.listen(3000, () => {
	console.info("Server is running on port 3000");
});
