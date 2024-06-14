const paymentRules = require("../rules/paymentRules");
const Order = require("../models/order");

const processPayment = (order) => {
    paymentRules.forEach((rule) => {
        if (rule.condition(order)) {
            rule.action(order);
        }
    });
};

module.exports = { processPayment };
