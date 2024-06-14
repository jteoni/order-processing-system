const assert = require("assert");
const { processPayment } = require("../controllers/paymentController");
const Order = require("../models/order");

describe("Payment Rules", () => {
    it("should generate shipment slip and commission for physical product", () => {
        const order = new Order("1", "physical");
        processPayment(order);
        assert.deepStrictEqual(order.shipmentSlip, [
            "Generate shipment slip for physical product",
        ]);
        assert.deepStrictEqual(order.commissionPayments, [
            "Generate commission payment to agent",
        ]);
    });

    it("should generate duplicate shipment slip for book", () => {
        const order = new Order("2", "book");
        processPayment(order);
        assert.deepStrictEqual(order.shipmentSlip, [
            "Generate shipment slip for book",
            "Duplicate shipment slip for royalties department",
        ]);
        assert.deepStrictEqual(order.commissionPayments, [
            "Generate commission payment to agent",
        ]);
    });
});
