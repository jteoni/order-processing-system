const express = require("express");
const { processPayment } = require("./controllers/paymentController");
const Order = require("./models/order");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Order Processing System is running");
});

app.post("/process-payment", (req, res) => {
    const { id, productType, isUpgrade, isMembership } = req.body;
    const order = new Order(id, productType, isUpgrade, isMembership);
    processPayment(order);
    res.json(order);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
