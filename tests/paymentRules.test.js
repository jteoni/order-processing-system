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

    it("should activate new membership and notify owner", () => {
        const order = new Order("3", "membership", false, true);
        processPayment(order);
        assert.deepStrictEqual(order.emailNotifications, [
            "Activate membership and notify owner",
        ]);
    });

    it("should apply upgrade to membership and notify owner", () => {
        const order = new Order("4", "membership", true, true);
        processPayment(order);
        assert.deepStrictEqual(order.emailNotifications, [
            "Apply upgrade and notify owner",
        ]);
    });

    it('should include free "First Aid" video for "learning-ski" video product', () => {
        const order = new Order("5", "video");
        order.id = "learning-ski"; // Simulando que o ID é para o vídeo específico
        processPayment(order);
        assert.deepStrictEqual(order.shipmentSlip, [
            'Include free "First Aid" video',
        ]);
    });

    it("should generate shipment slip and commission for book and notify owner", () => {
        const order = new Order("6", "book", true, false);
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
