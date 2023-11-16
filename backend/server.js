import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

// let port = process.env.PORT || 5000;
let port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
